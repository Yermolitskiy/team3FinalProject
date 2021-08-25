<template>
  <div>
    <div id="nav" v-if="$store.state.auth.isLogged">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/allPosts">All Posts</router-link>
      <router-link to="/myPosts">My Posts</router-link>
      <router-link to="/createPost">Create Post</router-link>
      <button @click="logout"> Sign out </button>
     
    </div>
    <div id="nav" v-else>
      <router-link to="/">Home</router-link> |
       <router-link to="/register">Registration</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods:{
    ...mapActions({loadUser:'auth/loadUser' , handleLogout:'auth/logout'}),
    logout(){
      this.handleLogout()
      this.$router.replace('/login')
    }
  },

  beforeMount(){
    this.loadUser()
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
