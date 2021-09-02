<template>
  <div id="app">  
    <div class="navb">
      <div class="nbl">      
        <ul>
          <li><router-link to="/" id="nl">Blog</router-link></li>
          <li><router-link to="/posts" id="nl">Posts</router-link></li>
          <li><router-link to="/add" id="nl">Add</router-link></li>
          <li><router-link to="/home" id="nl">Home</router-link></li>
          <li v-if="showAdminBoard"><router-link to="/admin" id="nl">Admin Board</router-link></li>
          <li v-if="showModeratorBoard"><router-link to="/mod" id="nl">Moderator Board</router-link></li>
          <li><router-link v-if="currentUser" to="/user" id="nl">User</router-link>
          </li>
        </ul>
      </div>
      <div class="nbl2" v-if="!currentUser">
        <ul>
          <li><router-link to="/register" id="nl">Sign Up</router-link></li>
          <li><router-link to="/login" id="nl">Login</router-link></li>
        </ul>
      </div>
      <div class="nbl3" v-if="currentUser">
        <ul>
          <li><router-link to="/profile" id="nl">{{ currentUser.username }}</router-link></li>
          <li><a @click.prevent="logOut" id="nl">LogOut</a></li>
        </ul>
      </div>
    </div> 
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style>
.navb {
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  top: 0;
}

li {
  display: inline;
  float: left;
  border-right: 1px solid #bbb;
}

li #nl {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li #nl:hover {
  background-color: #111;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
