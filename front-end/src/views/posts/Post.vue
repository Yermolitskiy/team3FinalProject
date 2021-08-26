<template>
    <div>
         <!-- <article-card 
                :body="post.body" :title="post.title" 
                :author="post.author"
                :date="post.date"
                :key="'article-'+post.id" /> -->
           
           <div v-if="loading">
               ...Loading
           </div>
            <div class="post_wrapper" v-if="$route.name === 'editPost' && !loading">

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

            <div v-if="$route.name === 'myPost'">
                to display
            </div>
    </div>
</template>

<script>
import { mapActions , mapState } from 'vuex'
import {actionsIds} from '../../store/postModule/actions'


    export default {
      
        methods:{
            updatePost(data){
                this.handleUpdatePost({data , id:Number.parseInt(this.$route.params.id)})
            },
            ...mapActions({
                handleUpdatePost:'post/' + actionsIds.UPDATE_POST,
                getMyPost:'post/' + actionsIds.GET_MY_POST
                })
        },
 
       computed:{
           
           ...mapState({
               userPost: (state) => state.post.selectedPost ,
               loading: (state) => state.post.postsLoading}) ,
               formData(){
                   return this.userPost ? Object.assign({} , {title:this.userPost.title , body:this.userPost.body} ) : {}
               }
        //    post(){
        //        return Array.from(this.$store.state.post.posts).find(post => post.id === Number.parseInt(this.$route.params.id))
        //    }
       },
       mounted(){
        //    console.log(this.loading)
        //    console.log(this.userPost)
           if(this.$route.name === 'editPost'){
               this.getMyPost(Number.parseInt(this.$route.params.id))
           }
       },
       
       
       
    }
</script>

<style scoped>

.post_wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>