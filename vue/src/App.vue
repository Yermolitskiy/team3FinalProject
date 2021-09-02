<template>
  <div id="app">
    <div class="navb">
      <ul>
        <div>
          <li><router-link to="/home" id="nl">Blog</router-link></li>
          <li><router-link v-if="currentUser" to="/posts" id="nl">Posts</router-link></li>
          <li><router-link to="/add" id="nl">Add</router-link></li>
          <!-- <li><router-link to="/home" id="nl">Home</router-link></li> -->
          <!-- <li><a  id="nl" href="/">Blog</a></li> -->
          <!-- <li><router-link id="nl" to="/home">Home</router-link></li> -->
          <li v-if="showAdminBoard">
            <router-link id="nl" to="/admin">Admin Board</router-link>
          </li>
          <li v-if="showModeratorBoard">
            <router-link id="nl" to="/mod">Moderator Board</router-link>
          </li>
          <li>
            <router-link id="nl" v-if="currentUser" to="/user">User Content</router-link>
          </li>
        </div>

        <div v-if="!currentUser">
          <li><router-link id="nl" to="/register"><font-awesome-icon icon="user-plus" />  Sign Up</router-link></li>
          <li><router-link id="nl" to="/login"><font-awesome-icon icon="sign-in-alt" />  Login</router-link></li>
        </div>

        <div v-if="currentUser">
          <li><router-link id="nl" to="/profile">{{ currentUser.username }}</router-link></li>
          <li><a id="nl" @click.prevent="logOut">
              LogOut
            </a>
          </li>
        </div>
      </ul>
      
    </div>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import EventBus from "./common/EventBus";

export default {
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
  },
  mounted() {
    EventBus.on("logout", () => {
      this.logOut();
    });
  },
  beforeUnmount() {
    EventBus.remove("logout");
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
  background-color: #f7f7f7;
  top: 0;
}

li {
  display: inline;
  float: left;
  border-right: 1px solid #bbb;
}

li #nl {
  display: block;
  color:#ADADAD;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li #nl:hover {
  color: black;
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
