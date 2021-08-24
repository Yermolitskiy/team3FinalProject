<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">


    <div class="card_container" :style="gridStyle" >
      <post-card v-for="post in postsData" :title="post.title" :body="post.body" :key="'post-' + post.id"/>
    </div>

  </div>
</template>

<script>

import PostCard from '@/components/PostCard'


export default {
  data(){
    return{
      postsData:[
        {title:'dummy tite 2' , body:'dummy body 2' , id:2},
        {title:'dummy titlle 1' , body:'dummy body 1' , id:1},
        {title:'dummy title 3' , body:'dummy body 3' , id:3},
        {title:'dummy title 4' , body:'dummy body 4' , id:4},
        {title:'dummy title 5' , body:'dummy body 5' , id:5},
        {title:'dummy title 6' , body:'dummy body 6' , id:6},
        {title:'dummy title 7' , body:'dummy body 7' , id:7},
        {title:'dummy title 8' , body:'dummy body 8' , id:8},
        {title:'dummy title 9' , body:'dummy body 9' , id:9},
        {title:'dummy title 10' , body:'dummy body 10' , id:10},
        
      ]
    }
  },
  components:{PostCard},
  computed:{
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
    
  },
  mounted(){
    console.log(this.gridStyle)
  }
 
}
</script>

<style scoped>



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
