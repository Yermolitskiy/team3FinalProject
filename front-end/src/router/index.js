import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AllPosts from '../views/posts/AllPosts.vue'
import CreatePost from '../views/posts/CreatePost.vue'
import MyPosts from '../views/posts/MyPosts.vue'
// import Post from '../views/posts/Post.vue'
import Error404Page from '../views/404.vue'
import Registration from '../views/auth/Registration.vue'
import Login from '../views/auth/Login.vue'

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path:'/allPosts',
    name:'AllPosts',
    component:AllPosts
  },
  {
    path:'/createPost',
    name:'createPost',
    component:CreatePost
  },
  {
    path:'/myPosts',
    name:'myPosts',
    component:MyPosts,
    meta:{
      requiresAuth:true
    }
   
  },
  {
    path:'/register',
    name:'registration',
    component:Registration,
    meta:{
      quest:true
    }
  },
  {
    path:'/login',
    name:'login',
    component:Login,
    meta:{
      quest:true
    }
  },{
    path:'/:catchAll(.*)*',
    name:'404',
    component:Error404Page
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

router.beforeEach((to , from , next) => {

  if(to.matched.some(route => route.meta.quest)){

    if(localStorage.getItem('token') == null){
      next()
    }else{
      next('/')
    }
  }
  else if(to.matched.some(route => route.meta.requiresAuth)) {
   
      if(localStorage.getItem('token') !== null ){
        next()
      }else{
        next('/')
      }

  }
  else{
    next()
  }

  



})