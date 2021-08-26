<template>
    <div>


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
        <div class="loader" v-if="loading">
            ...Loading
        </div>


       <div class="article_list" v-if="!loading && ($route.name === 'myPosts')">
           <div v-for="article in myPosts" :key="'article-'+article.id" >
                <article-card  
                :body="article.body" :title="article.title" 
                :author="article.author"
                :date="article.date"
                />

                <div class="button_wrapper">
                    <button @click="$router.push({name:'editPost' , params:{id:article.id}})">Click to Navigate</button>
                    <button @click="showModal(article.id)" >Delete</button>
                </div>
                
           </div>
           
        </div>

        <div class="observer" v-intersection="fetchMorePosts" v-if="!loading && ($route.name === 'myPosts')" ></div>

        <!-- displays single post/post edit form depending on route name -->
        <!-- currently tested and implemented only edit view -->
        <!-- /myPosts/:id/edit -->
        <!-- /myPosts/:id -->
        <router-view/>
        <!-- /myPosts/:id -->
        <!-- /myPosts/:id/edit -->
        <!-- displays single post/post edit form depending on route name -->

    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import {actionsIds} from '../../store/postModule/actions'
import {postMutationsIds} from '../../store/postModule/mutations'
    export default {
        data(){
            return{
                modalVisible:false,
                postId:undefined
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
                setPage:'post/' + postMutationsIds.SET_PAGE
            })
        },
        mounted(){ this.fetchPosts({ofCurrentUser:true}) },
        beforeUnmount(){this.setPage(0)},
        computed:{
            ...mapState({myPosts: state => state.post.userPosts})
        },

        

    }
    
</script>

<style  scoped>

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

.observer{
    height:30px;
    background:gray;
}
</style>