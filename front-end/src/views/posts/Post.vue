<template>
    <div>
        
         <!-- eslint-disable -->
        <my-dialog v-model:show="modalVisible" >
     <!-- eslint-enable -->
            <div class="modal_delete">
                <div>
                    Are you sure you want to delete this post?
                </div>
                <button-1 @click="deletePost" style="background:red">Delete</button-1>
            </div>
        </my-dialog>
           
           <div v-if="loading">
               ...Loading
           </div>

            <div class="post_wrapper" v-if="$route.name === 'editPost' && !loading && selectedPost">

                  <custom-form @onSubmit="updatePost" :initialData="formData"  :formType="'postForm'">
                    <template #header>
                        Edit Post
                    </template>
                    <template #submit_button>
                            Update
                    </template>
                </custom-form>

                <button-1 style="background:red" @click="$router.go(-1)" >Cancel</button-1>
            </div>



            <div class="post_wrapper" v-if="$route.name === 'myPost' || $route.name === 'singlePost'">
                <div v-if="selectedPost">
                     <article-card 
                        :body="selectedPost.body" :title="selectedPost.title" 
                        :author="selectedPost.author"
                        :date="selectedPost.date"
                        :img="selectedPost.postImage" />
                </div>
                

                <div class="button_wrapper" v-if="selectedPost && ofCurrentUser">
                    <button @click="$router.push({name:'editPost' , params:{id:$route.params.id}})">Edit</button>
                    <button @click="showModal()" >Delete</button>
                </div>

            </div>

    </div>
</template>

<script>
import { mapActions , mapMutations, mapState } from 'vuex'
import {actionsIds} from '../../store/postModule/actions'
import {postMutationsIds} from '../../store/postModule/mutations'


    export default {

        data(){
            return{
                 modalVisible:false,
            }
        },
      
        methods:{
             showModal(){
                this.modalVisible = true
            },
            deletePost(){
                this.modalVisible = false
                this.removePost(this.$route.params.id)
                this.$router.push('/myPosts')
            },
            updatePost(data){
                this.handleUpdatePost({data , id:Number.parseInt(this.$route.params.id)})
            },
            ...mapActions({
                handleUpdatePost:'post/' + actionsIds.UPDATE_POST,
                getPost:'post/' + actionsIds.GET_POST,
                removePost:'post/' + actionsIds.REMOVE_POST
                }),
            ...mapMutations({
                setSelectedPost:'post/' + postMutationsIds.SELECT_POST
            })
        },
 
       computed:{
         
           ...mapState({
               selectedPost: (state) => state.post.selectedPost ,
               loading: (state) => state.post.postsLoading,
               user:(state) => state.auth.user
               }) ,
               

               formData(){
                   return  Object.assign({} , {title:this.selectedPost.title , body:this.selectedPost.body} ) 
               },
               ofCurrentUser(){
                   return (this.user.name + " " + this.user.surname) === this.selectedPost.author
               }
        //    post(){
        //        return Array.from(this.$store.state.post.posts).find(post => post.id === Number.parseInt(this.$route.params.id))
        //    }
       },
       mounted(){
        
           if(this.$route.name === 'editPost' || this.$route.name === 'myPost'){
               this.getPost({ofCurrentUser:true , id:Number.parseInt(this.$route.params.id)})
           }

           if(this.$route.name === 'singlePost' ){
               this.getPost({id:Number.parseInt(this.$route.params.id)})
           }
       },
       beforeUnmount(){
           this.setSelectedPost(null)
       }
       
       
       
    }
</script>

<style scoped>

.modal_delete{
    height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.modal_delete :first-child{
    margin:10px 0 10px 0;
}

.button_wrapper{
    margin:10px 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.post_wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>