import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AllPosts from '../views/posts/AllPosts.vue'
import CreatePost from '../views/posts/CreatePost.vue'
import MyPosts from '../views/posts/MyPosts.vue'
import Post from '../views/posts/Post.vue'
import Error404Page from '../views/404.vue'
import Registration from '../views/auth/Registration.vue'
import Login from '../views/auth/Login.vue'

import userState from '../store/authModule/state'


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
    path:'/posts',
    name:'AllPosts',
    component:AllPosts,
    children:[
      {
        path:':id',
        name:'singlePost',
        component:Post
      }
    ]
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
    children:[
      {
        path:':id',
        component:Post,
        name:'myPost',
        children:[
          {
            path:'edit',
            component:Post,
            name:'editPost'
          }

        ]
      }
    ],
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

  console.log('user is logged?' , userState.isLogged)

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