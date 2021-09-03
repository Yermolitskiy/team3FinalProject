<template>
    <div class="flex_column_container">

        <!-- single post view -->
       <router-view/>
        <!-- single post view -->


         <div v-if="$route.name==='AllPosts' && loading">
             <loader/>
        </div>

         

        <div  v-if="!loading && $route.name==='AllPosts'">

            <custom-select v-if="Array.isArray(articleData) && articleData.length">
                  <select @change="changeOrder" v-model="orderOption" name="order" id="order">
                    <option disabled value="">Choose order</option>
                    <option value="publicationDate">Publication Date</option>
                    <option value="title">Title </option>
                    <option value="author">Author </option>
                </select>

                <icon-base width="25px" height="25px" @click="orderAscending">
                    <arrow-up-icon/>
                </icon-base>            
                <icon-base width="25px" height="25px" @click="orderDescending">
                    <arrow-down-icon/>
                </icon-base>
            </custom-select>
 

            <div class="article_list" v-if="Array.isArray(articleData) && articleData.length">
                <article-card v-for="article in articleData" 
                :body="article.body" :title="article.title" 
                :author="article.author"
                :img="article.postImage"
                
                :date="new Date(Date.parse(article.publicationDate)).toLocaleString()"
                :class="{hovered:hover === article.id}" @mouseover="hover = article.id" @mouseleave="hover = false"
                @click="$router.push({name:'singlePost' , params:{id:article.id}})"
                :key="'article-'+article.id" />
            </div>
            <div v-else-if="!Array.isArray(articleData) && Object.entries(articleData).length">
                <article-card
                    :body="articleData.body" :title="articleData.title" 
                    :author="articleData.author"
                    :img="articleData.postImage"
                    :date="new Date(Date.parse(articleData.publicationDate)).toLocaleString()"
                     />
                 />
            </div>
            <div v-else>
                <h1>No posts created yet</h1>
                <article-button v-if="isLogged" @click="$router.push('/createPost')" style="background:green">
                    Be first who will create a post!
                </article-button>

            </div>
            
        <div v-if="!loading" v-intersection="loadMore" class="observer" ></div>
        </div>
        
    </div>
</template>

<script>

    import {mapActions, mapMutations, mapState} from 'vuex'
    import ArticleCard from '@/components/ArticleCard.vue'
    import {actionsIds} from '@/store/postModule/actions'
    import {postMutationsIds} from '@/store/postModule/mutations'
    import ArrowUpIcon from '@/components/Icons/ArrowUp.vue'
    import ArrowDownIcon from '@/components/Icons/ArrowDown.vue'
    export default {
  components: { ArticleCard , ArrowUpIcon , ArrowDownIcon },
        data(){
            
            return{
                dummyArticles:[
                    {id:1 , author:'John Doe' , title:'Some title 1' , body:'Literature admiration frequently indulgence announcing are who you her. Was least quick after six. So it yourself repeated together cheerful. Neither it cordial so painful picture studied if. Sex him position doubtful resolved boy expenses. Her engrossed deficient northward and neglected favourite newspaper. But use peculiar produced concerns ten. ' , date:'20.11.2021'},
                    {id:2 , author:'Sam Johnson' , title:'Some title 2' , body : 'Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects.' , date:'21.02.2021'},
                    {id:3 , author:'Antony Hopkins' , title:'Some title 3' , body:'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behaviour arranging. She offices for highest and replied one venture pasture.' , date:'31.09.2021'},
                    {id:4,author:'Boris Andropov',title:'Some title 4', body:'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. ' , date:'14.04.2021'},
                    {id:5 , author:'Kendrick Lamar' ,  title:'Some title 5' ,body:'Be me shall purse my ought times. Joy years doors all would again rooms these. Solicitude announcing as to sufficient my. No my reached suppose proceed pressed perhaps he.',date:'22.02.2021'},
                    {id:6 , author:'Josh Bush' , title:'Some title 6' , body:'Eagerness it delighted pronounce repulsive furniture no. Excuse few the remain highly feebly add people manner say. It high at my mind by roof. No wonder worthy in dinner. ' , date:'14.03.2021'}
                ],
                hover:false,
                orderOption:'',
                orderDirection:''
            }
        },
        methods:{
          ...mapActions({
              fetchPosts: 'post/' + actionsIds.FETCH_POSTS,
              fetchMorePosts: 'post/' + actionsIds.FETCH_MORE_POSTS
          }),
          ...mapMutations({
              setPage:'post/' + postMutationsIds.SET_PAGE
          }),
          changeOrder(){
              this.setPage(0)
              this.fetchPosts({order:this.orderOption})
          },
          orderAscending(){
              if(this.orderOption){
                  this.setPage(0)
                  this.orderDirection = 'ASC'
                  this.fetchPosts({order:this.orderOption , orderDirection:this.orderDirection})
              }
          },
          orderDescending(){
              if(this.orderOption){
                  this.setPage(0)
                  this.orderDirection = 'DESC'
                  this.fetchPosts({order:this.orderOption , orderDirection:this.orderDirection})
              }
          },
          loadMore(){
              this.fetchMorePosts({order:this.orderOption , orderDirection:this.orderDirection})
          }
        },
        computed:{
            ...mapState({
                articleData: state => state.post.posts,
                loading:state => state.post.postsLoading,
                isLogged:state => state.auth.isLogged
            })
        },
        mounted(){
            this.fetchPosts()
        },

        //this is only for scroll fetch case , for pagination it's should be changed or removed
        beforeUnmount(){
            this.setPage(0)
        }
    
    }
</script>

<style scoped>

.hovered{
  background-color: skyblue;
  cursor:pointer;
}

.select_box{
    align-self: flex-end;
    display: flex;
    margin-right:3.5rem;
}


.article_list{
    display: flex;
    flex-direction: column;
    align-items: center; 
}
.article_list > div{
    margin:3rem 0 3rem 0;
}

</style>
