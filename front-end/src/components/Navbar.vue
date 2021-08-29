<template>
    <div>
          <div v-if="type === 'mobile'" >

          <nav class="main-nav" v-if="!$store.state.isNavOpen">
              <div>
                my.company
              </div>
            <Burger></Burger>
          </nav>
          <nav v-else-if="$store.state.isNavOpen" class="main-nav" @click="hideNavbar">
              <div>
                my.company
              </div>
            <Burger></Burger>
          </nav>


          <SideBar>
               <ul class="sidebar-panel-nav" v-if="$store.state.auth.isLogged" >
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/posts">All posts</router-link></li>
                    <li><router-link to="/myPosts">My posts</router-link></li>
                    <li><router-link to="/createPost">Create post</router-link></li>
                    <li><button @click="logout"> Sign out </button></li>
                </ul>
                <ul v-else class="sidebar-panel-nav" >
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/register">Registration</router-link></li>
                  <li><router-link to="/login">Login</router-link></li>
                </ul>
          </SideBar>

      </div>

      <div v-else-if="type === 'tablet' || type === 'desktop'">
        <div class="main-nav"  >
          
          <div class="left_nav_wrapper">
            <div class="logo_block"></div>
            <router-link id="left_nav_link" to="/">Home</router-link> 
            <router-link id="left_nav_link" to="/posts">All posts</router-link>
          </div>

          <div class="iconbutton_wrapper">
       
              <icon-base
                v-if="$store.state.auth.isLogged"
                @click="$router.push('/createPost')"
                width="30"
                height="30"
                icon-name="add post"
            >
              <add-icon/>
            </icon-base>

            <icon-base
              width="30"
              height="30"
              icon-name="user"
              @click="toggleUserDropdown"
            >
              <user-icon />
            </icon-base>
            <transition name="slide_vertical">
              <div class="usr" v-if="showDropdownMenu" >

                <router-link id="dropdown_link" to="/myPosts" v-if="$store.state.auth.isLogged">My posts</router-link>
                <button @click="logout" v-if="$store.state.auth.isLogged"> Sign out </button>
                <router-link id="dropdown_link" to="/login" v-if="!$store.state.auth.isLogged">Sign in</router-link>
                <router-link id="dropdown_link" to="/register" v-if="!$store.state.auth.isLogged">Sign up</router-link>

              </div>
            </transition>
          </div>
        </div>
       
      </div>

    </div>
       
</template>

<script>
import Burger from '@/components/UI/Burger.vue'
import SideBar from '@/components/UI/Sidebar.vue'
import useBreakPoints from '@/hooks/useBreakPoints'
import AddIcon from '@/components/Icons/AddIcon.vue'
import UserIcon from '@/components/Icons/UserIcon.vue'
import {mapActions} from 'vuex'

    export default {
        components:{  Burger , SideBar , AddIcon , UserIcon  },
         data(){
    return{
      showDropdownMenu:true
    }
  },
 
  
  methods:{
    toggleUserDropdown(){
      this.showDropdownMenu = !this.showDropdownMenu
    },
    ...mapActions({ handleLogout:'auth/logout'}),
    
        logout(){
        this.handleLogout()
        this.$router.replace('/login')
        },
            hideNavFromTopBar(){
            if(this.$store.state.isNavOpen){
                this.hideNavbar()
            }
            }
        },
        setup(){
            const {type} = useBreakPoints()
            return {type}
        },
    }
</script>

<style >
#nav {
  padding: 30px;
}



@media only screen and (min-width:768px) {
  .iconbutton_wrapper{
    margin-right: 3rem;
    display: flex;
    justify-content: space-evenly;
    width:10rem
  }

  .logo_block{
    margin-top:5px;
    width:30px;
    height:30px;
    background:rgb(230, 225, 228) ;
  }

  #left_nav_link{
    color:rgb(124, 107, 181);
    margin-top:10px;
    text-decoration: none;
    font-weight: 500;
    cursor:pointer;
  }

  .left_nav_wrapper{
    margin-left: 3rem;
    display: flex;
    justify-content: space-evenly;
    width:15rem
  }



  .usr{
    background:rgb(230, 225, 228);
    
    width: 13rem;
    position: absolute;
    right:6.3rem;
    top:70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  #dropdown_link{
    color:rgb(124, 107, 181);
    margin:8px 0 5px 15px;
    text-decoration: none;
    font-weight: 500;
    cursor:pointer;
    
  }
  .usr button{
    border:none;
    background:none;
    margin:8px 0 5px 15px;
    font-weight: 500;
    color:rgb(124, 107, 181);
    padding:0;
    font-size:16px;
  }
}

@media only screen and (min-width: 1440px) {
  .iconbutton_wrapper{
    margin-right: 10rem;
  }
  .usr{
    right:13.5rem;
  }

  .left_nav_wrapper{
    margin-left: 10rem;
  }
}



.slide_vertical-enter-from{
  opacity:0;
  top:50px;
  
}
.slide_vertical-enter-active{
  transform: scaleY(1);
  transition: all 250ms ease-out;
}
.slide_vertical-enter-to{
  opacity:1;
}

.slide_vertical-leave-active{
  transform: scaleY(0);
  top:20px;
  opacity:0;
  transition: all 250ms ease-in;
}







.main-nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 10px;
}

.main-nav a.router-link-exact-active {
  color: #42b983;
}



 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 1rem 1.8rem;
   position: relative;
 }

 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1rem;
   display: block;
   padding-bottom: 0.5em;
 }
</style>