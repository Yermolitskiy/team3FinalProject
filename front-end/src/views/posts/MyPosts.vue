<template>
    <div class="flex_column_container">


    <!-- delete modal window -->
    <!-- TODO:: disable rule globally because since vue3 v-model with arguments is supported -->
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
    <!-- delete modal window -->

    <!-- simple text loading status -->
        <loader/>

 
        <div v-if="message">
           <h2>{{message}}</h2> 
        </div>


       <div class="article_list" v-if="!loading && ($route.name === 'myPosts')">
           <div v-if="Array.isArray(myPosts) && myPosts">
                <div v-for="article in myPosts" :key="'article-'+article.id" >
                    <article-card  
                    :body="article.body" :title="article.title" 
                    :img="article.postImage"
                    :author="article.author"
                    :date="article.publicationDate.split('T')[0]"
                    :class="{hovered:hover === article.id}" @mouseover="hover = article.id" @mouseleave="hover = false"
                    @click="$router.push({name:'myPost' , params:{id:article.id}})"
                    />
                    <!-- with publication time  -->
                    <!-- :date="article.publicationDate.split('T')[0]  + ' ' + article.publicationDate.split('T')[1].split('.')[0]" -->

                    <div class="button_wrapper">
                        <article-button color="#4ac793" @click="$router.push({name:'editPost' , params:{id:article.id}})">Edit</article-button>
                        <article-button color="#cf5a4a" @click="showModal(article.id)" >Delete</article-button>
                    </div>
                </div>
           </div>
           <div v-else-if="!Array.isArray(myPosts) && myPosts">
               <article-card 
                    :body="myPosts.body" :title="myPosts.title"
                    :img="myPosts.postImage" :author="myPosts.author" :date="myPosts.publicationDate.split('T')[0]"/>

                 <div class="button_wrapper">
                        <article-button color="#4ac793" @click="$router.push({name:'editPost' , params:{id:myPosts.id}})">Edit</article-button>
                        <article-button color="#cf5a4a" @click="showModal(myPosts.id)" >Delete</article-button>
                </div>
           </div>
           <div v-else>
               <h1>No posts created</h1>
           </div>
           
           
        </div>

        <div class="observer" v-intersection="fetchMorePosts" v-if="!loading && myPosts && ($route.name === 'myPosts')" ></div>

        <!-- displays single post/post edit form depending on route name -->
        <!-- currently tested and implemented only edit view -->
        <!-- /myPosts/:id/edit -->
        <!-- /myPosts/:id -->
        <router-view :key="$route.fullPath"/>
        <!-- /myPosts/:id -->
        <!-- /myPosts/:id/edit -->
        <!-- displays single post/post edit form depending on route name -->

    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import ArticleCard from '../../components/ArticleCard.vue'
import {actionsIds} from '../../store/postModule/actions'
import {postMutationsIds} from '../../store/postModule/mutations'
    export default {
  components: { ArticleCard },
        data(){
            return{
                modalVisible:false,
                postId:undefined,
                hover:false
            }
        },
        methods:{
            showModal(id){
                this.postId = id
                this.modalVisible = true
            },
            deletePost(){
                this.handleDeletePost(this.postId)
                this.modalVisible = false
            },
            fetchMorePosts(){
                this.handleFetchMorePosts({ofCurrentUser:true})
            },
            ...mapActions({
                fetchPosts : 'post/' + actionsIds.FETCH_POSTS,
                handleFetchMorePosts: 'post/' + actionsIds.FETCH_MORE_POSTS,
                handleDeletePost:'post/' + actionsIds.DELETE_POST}),
            ...mapMutations({
                setPage:'post/' + postMutationsIds.SET_PAGE ,
                setMessage:'post/' + postMutationsIds.SET_MESSAGE
            })
        },
        mounted(){ this.fetchPosts({ofCurrentUser:true}) },
        beforeUnmount(){
            this.setPage(0)
            this.setMessage(null)
            },
        computed:{
            ...mapState({
                myPosts: state => state.post.userPosts,
                message: state => state.post.message,
                loading: state => state.post.postsLoading
                })
        },

        

    }
    
</script>

<style  scoped>

.hovered{
  background-color: skyblue;
  cursor:pointer;
}

.article_list{
    display: flex;
    flex-direction: column;
    align-items: center; 
}
.article_list > div{
    margin:3rem 0 3rem 0;
}

.button_wrapper{
    margin:10px 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal_delete{
    height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.modal_delete :first-child{
    margin:10px 0 10px 0;
}


</style>