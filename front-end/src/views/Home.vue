<template>
  <div class="home">
    <img alt="Accenture Bootcamp logo" id="logo" src="../assets/logo.jpg">


    <div class="card_container" :style="gridStyle" v-if="!loading && Array.isArray(postsData)">
      <post-card v-for="post in postsData"
        :img="post.postImage" 
        :class="{hovered:hover === post.id}" @mouseover="hover = post.id" @mouseleave="hover = false"
        @click="$router.push({name:'singlePost' , params:{id:post.id}})"
        :title="post.title"
        :key="'post-' + post.id"/>
    </div>
    <div v-else-if="!loading && !Array.isArray(postData)">
      <post-card 
        :title="postsData.title" 
        @click="$router.push({name:'singlePost' , params:{id:postsData.id}})"
        :class="{hovered:hover === post.id}" @mouseover="hover = true" @mouseleave="hover = false"
        :img="postsData.postImage" :id="postsData.id" />
    </div>
    <div v-else-if="!loading && !postData">
      <h1>No posts</h1>
    </div>

    <div v-if="loading">
      ...Loading
    </div>

  </div>
</template>

<script>

import PostCard from '@/components/PostCard'
import { mapActions, mapMutations, mapState } from 'vuex'
import {postMutationsIds} from '../store/postModule/mutations'
import {actionsIds} from '../store/postModule/actions'


export default {
  data(){
    return{
      dummyPostsData:[
        {title:'dummy tite 2' , body:'dummy body 2' , id:2},
        {title:'dummy titlle 1' , body:'dummy body 1' , id:1},
        {title:'dummy title 3' , body:'dummy body 3' , id:3}
        
      ],
      hover:false
    }
  },
  components:{PostCard},
  computed:{
  ...mapState({
      loading: state => state.post.postsLoading,
      postsData: state => state.post.posts,
      error: state => state.post.error
    }),
    gridStyle(){
      return {
        gridTemplate: `repeat(${this.postsRows} ,1fr) / repeat(3 , 1fr)`,
        gap: '2rem 2rem'
      }
    },
    postsRows(){
      return Math.ceil(this.postsData.length/3) 
    }
  },
 
  methods:{
    ...mapMutations({
      setLimit:'post/'+postMutationsIds.SET_LIMIT
    }),
    ...mapActions({
      fetchPosts:'post/'+actionsIds.FETCH_POSTS
    }),
    test(event){
      console.log('test')
      console.log(event)
    }
  },
  mounted(){
   this.setLimit(3)
   this.fetchPosts()
  },
  beforeUnmount(){
    this.setLimit(10)
  }
 
}
</script>

<style scoped>

#logo{
  margin:3rem 0 5rem 0;
}

.hovered{
  background-color: skyblue;
  cursor:pointer;
}

@media only screen and (min-width:325px){
.card_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  
  }
}
@media only screen and (min-width: 1440px){
    .card_container{
      margin: 100px 12.5% 0 12.5%;
      display: grid;
  }



 
}
</style>
