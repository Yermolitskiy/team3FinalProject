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
    <div v-if="loading  && $route.name === 'myPosts'">
        <loader/>
    </div>

 
        <div v-if="message && ($route.name === 'myPosts')">
           <h2>{{message}}</h2> 
        </div>


       <div class="article_list" v-if="!loading && ($route.name === 'myPosts')">

                     <custom-select v-if="Array.isArray(myPosts) && myPosts.length">
                        <select @change="changeOrder" v-model="orderOption" name="order" id="order">
                            <option disabled value="">Choose order</option>
                            <option value="publicationDate">Publication Date</option>
                            <option value="title">Title </option>
                            <!-- <option value="author">Author </option> -->
                        </select>

                        <icon-base width="25px" height="25px" @click="orderAscending">
                            <arrow-up-icon/>
                        </icon-base>

                    
                        <icon-base width="25px" height="25px" @click="orderDescending">
                            <arrow-down-icon/>
                        </icon-base>
                     </custom-select>

           <div v-if="Array.isArray(myPosts) && myPosts.length">
                <div v-for="article in myPosts" :key="'article-'+article.id" >
                    <article-card  
                    :body="article.body" :title="article.title" 
                    :img="article.postImage"
                    :author="article.author"
                    :date="new Date(Date.parse(article.publicationDate)).toLocaleString()"
                    :class="{hovered:hover === article.id}" @mouseover="hover = article.id" @mouseleave="hover = false"
                    @click="$router.push({name:'myPost' , params:{id:article.id}})"
                    />
                   

                    <div class="button_wrapper">
                        <article-button color="#4ac793" @click="$router.push({name:'editPost' , params:{id:article.id}})">Edit</article-button>
                        <article-button color="#cf5a4a" @click="showModal(article.id)" >Delete</article-button>
                    </div>
                </div>
           </div>
           <div v-else-if="!Array.isArray(myPosts) && Object.entries(myPosts).length">
               <article-card 
                    :body="myPosts.body" :title="myPosts.title"
                    :img="myPosts.postImage" :author="myPosts.author" 
                    :date="new Date(Date.parse(myPosts.publicationDate)).toLocaleString()"
                    />

                 <div class="button_wrapper">
                        <article-button color="#4ac793" @click="$router.push({name:'editPost' , params:{id:myPosts.id}})">Edit</article-button>
                        <article-button color="#cf5a4a" @click="showModal(myPosts.id)" >Delete</article-button>
                </div>
           </div>
           <div v-else>
               <h1>No posts created yet</h1>
                <article-button @click="$router.push('/createPost')" style="background:green">
                    Create first post
                </article-button>
           </div>
           
           
        </div>

        <div class="observer" v-intersection="fetchMorePosts" v-if="!loading && myPosts && ($route.name === 'myPosts')" ></div>

        <!-- displays single post/post edit form depending on route name -->
        <!-- /myPosts/:id/edit -->
        <!-- /myPosts/:id -->
        <router-view :key="$route.fullPath"/>
        <!-- /myPosts/:id -->
        <!-- displays single post/post edit form depending on route name -->

    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import ArticleCard from '@/components/ArticleCard.vue'
import ArrowUpIcon from '@/components/Icons/ArrowUp.vue'
import ArrowDownIcon from '@/components/Icons/ArrowDown.vue'
import {actionsIds} from '@/store/postModule/actions'
// import {postMutationsIds} from '../store/postModule/mutations'
import {postMutationsIds} from '../../store/postModule/mutations'
import CustomSelect from '@/components/UI/CustomSelect.vue'
    export default {
  components: { ArticleCard , ArrowUpIcon ,ArrowDownIcon, CustomSelect },
        data(){
            return{
                modalVisible:false,
                postId:undefined,
                hover:false,
                orderOption:'',
                orderDirection:''
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
                this.handleFetchMorePosts({ofCurrentUser:true , order:this.orderOption , orderDirection:this.orderDirection})
            },
             changeOrder(){
              this.setMessage(null)
              this.setPage(0)
              this.fetchPosts({ofCurrentUser:true ,order:this.orderOption})
            },
            orderAscending(){
                if(this.orderOption){
                    this.setPage(0)
                    this.orderDirection = 'ASC'
                    this.fetchPosts({ofCurrentUser:true ,order:this.orderOption , orderDirection:this.orderDirection})
                }
            },
            orderDescending(){
                if(this.orderOption){
                    this.setPage(0)
                    this.orderDirection = 'DESC'
                    this.fetchPosts({ofCurrentUser:true ,order:this.orderOption , orderDirection:this.orderDirection})
                }
            },
            
            ...mapActions({
                fetchPosts : 'post/' + actionsIds.FETCH_POSTS,
                handleFetchMorePosts: 'post/' + actionsIds.FETCH_MORE_POSTS,
                handleDeletePost:'post/' + actionsIds.DELETE_POST}),
            ...mapMutations({
                setPage:'post/' + postMutationsIds.SET_PAGE ,
                setMessage:'post/' + postMutationsIds.SET_MESSAGE ,
                setPosts:'post/' + postMutationsIds.SET_MY_POSTS
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

.select_box{
    align-self: flex-start;
    display: flex;
    margin-right:3.5rem;
}


</style>