<template>
    <div>
        <div class="article_list" v-if="!loading">
            <article-card v-for="article in articleData" 
                :body="article.body" :title="article.title" 
                :key="'article-'+article.id" />
        </div>
        <div class="loader" v-if="loading">
            ...Loading
        </div>
    </div>
</template>

<script>

    import {mapActions, mapState} from 'vuex'
    // import {actionsIds} from '@/store/postModule/actions'
    import {actionsIds} from '../../store/postModule/actions'

    export default {
        data(){
            
            return{
                dummyArticles:[
                    {id:1 , author:'John Doe' , title:'Some title 1' , body:'Literature admiration frequently indulgence announcing are who you her. Was least quick after six. So it yourself repeated together cheerful. Neither it cordial so painful picture studied if. Sex him position doubtful resolved boy expenses. Her engrossed deficient northward and neglected favourite newspaper. But use peculiar produced concerns ten. ' , date:'20.11.2021'},
                    {id:2 , author:'Sam Johnson' , title:'Some title 2' , body : 'Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects.' , date:'21.02.2021'},
                    {id:3 , author:'Antony Hopkins' , title:'Some title 3' , body:'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behaviour arranging. She offices for highest and replied one venture pasture.' , date:'31.09.2021'},
                    {id:4,author:'Boris Andropov',title:'Some title 4', body:'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. ' , date:'14.04.2021'},
                    {id:5 , author:'Kendrick Lamar' ,  title:'Some title 5' ,body:'Be me shall purse my ought times. Joy years doors all would again rooms these. Solicitude announcing as to sufficient my. No my reached suppose proceed pressed perhaps he.',date:'22.02.2021'},
                    {id:6 , author:'Josh Bush' , title:'Some title 6' , body:'Eagerness it delighted pronounce repulsive furniture no. Excuse few the remain highly feebly add people manner say. It high at my mind by roof. No wonder worthy in dinner. ' , date:'14.03.2021'}
                ]
            }
        },
        methods:{
          ...mapActions({
              fetchPosts: 'post/' + actionsIds.FETCH_POSTS
          })
        },
        computed:{
            ...mapState({
                articleData: state => state.post.posts,
                loading: state => state.post.postsLoading
            })
        },
        mounted(){
            this.fetchPosts()
        }
    
    }
</script>

<style scoped>

.article_list{
    display: flex;
    flex-direction: column;
    align-items: center; 
}
.article_list > div{
    margin:3rem 0 3rem 0;
}
</style>
