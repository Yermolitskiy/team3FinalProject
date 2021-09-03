<template>
    <div>
          <div v-if="type === 'mobile'" >

          <nav class="main-nav" v-if="!isNavOpen">
              <div class="logo_block"></div>
            <Burger></Burger>
          </nav>

          <nav v-else-if="isNavOpen" class="main-nav" @click="hideNavbar">
            <div class="logo_block"></div>
            <Burger></Burger>
          </nav>

          <SideBar>
            <div class="sidebar-panel-nav" >
                <div>
                    <router-link to="/">Home</router-link>
                    <router-link to="/posts">All posts</router-link>
                </div>
                <div>
                    <router-link to="/myPosts" v-if="isLogged">My posts</router-link>
                    <router-link to="/createPost" v-if="isLogged">Create post</router-link>
                    <button @click="logout" v-if="isLogged"> Sign out </button>
                    <router-link to="/login " v-if="!isLogged">Login</router-link>
                    <router-link to="/register" v-if="!isLogged">Registration</router-link>
                </div>
            </div>    
          </SideBar>
      </div>

      <div v-else-if="type === 'tablet' || type === 'desktop'">
        <div class="main-nav"  >
          <!-- top navbar left-side -->
          <div class="left_nav_wrapper">
            <div class="logo_block"></div>
            <router-link  to="/">Home</router-link> 
            <router-link  to="/posts">All posts</router-link>
          </div>
        <!-- top navbar right side -->
          <div class="iconbutton_wrapper">
            <p v-if="isLogged"> Hi , {{name}} ! </p>

            <icon-base v-if="isLogged" @click="$router.push('/createPost')" width="30" height="30" icon-name="Add post">
                <add-icon/>
            </icon-base>

            <icon-base  width="30"  height="30" icon-name="User" @click="toggleUserDropdown" :style="!isLogged ? 'margin-left:3rem;':''" > 
              <user-icon />
            </icon-base>
            <!-- drop down menu -->
                <transition name="slide_vertical">
                    <div class="dropdown_menu" v-if="showDropdownMenu" >
                        <router-link  to="/myPosts" v-if="isLogged">My posts</router-link>
                        <button @click="logout" v-if="isLogged"> Sign out </button>
                        <router-link to="/login" v-if="!isLogged">Sign in</router-link>
                        <router-link  to="/register" v-if="!isLogged">Sign up</router-link>
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
import {mapActions, mapState} from 'vuex'

export default {

  components:{  Burger , SideBar , AddIcon , UserIcon  },
  data(){
    return{
      showDropdownMenu:false
    }
  },
  computed:{
    ...mapState({
        isLogged:state => state.auth.isLogged,
        isNavOpen:state => state.isNavOpen,
        name:state => state.auth.user.name

    })
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
            if(this.$store.state.isNavOpen) this.hideNavbar()
            }
      },
      
    setup(){
            const {type} = useBreakPoints()
            return {type}
        },
    }
</script>

<style >

.iconbutton_wrapper svg{
  cursor: pointer;
}

.sidebar-panel-nav{
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

.sidebar-panel-nav div {
      display: flex;
      flex-direction: column;
      text-align: left;
  }
.sidebar-panel-nav button{
 background: none;
 color:rgb(124, 107, 181);
 border: none;
 font-size: 15px;
 padding:10px 5px 5px 0px;
 text-align: left;
}
.sidebar-panel-nav a {
      text-decoration:none;
      padding:10px 5px 5px 0px;
  }

  .logo_block{
    margin-top:5px;
    width:30px;
    height:30px;
    background:rgb(230, 225, 228) ;
  }
  

@media only screen and (min-width:765px) {

  

  .iconbutton_wrapper{
    margin-right: 3rem;
    display: flex;
    justify-content: space-evenly;
    width:15rem
  }

  

   .left_nav_wrapper a{
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



  .dropdown_menu{
    background:rgb(230, 225, 228);
    padding:10px 5px 15px 5px;
    width: 13rem;
    position: absolute;
    right:6.3rem;
    top:70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
 
  .dropdown_menu a{
    color:rgb(124, 107, 181);
    margin:8px 0 5px 15px;
    text-decoration: none;
    font-weight: 500;
    cursor:pointer;
  }
  
  .dropdown_menu button{
    border:none;
    background:none;
    margin:8px 0 5px 15px;
    font-weight: 500;
    color:rgb(124, 107, 181);
    padding:0;
    font-size:16px;
    cursor:pointer;
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

  .dropdown_menu{
    right:13rem;
  }
}


 a.router-link-exact-active 
{
  color: #42b983;
}

 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 1rem 1.8rem;
   position: relative;
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
</style>