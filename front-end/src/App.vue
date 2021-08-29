<template>
  <div>
    <NavBar/>
    <router-view @click="hideNavbar"/>
  </div>
</template>

<script>
import { mapActions , mapMutations } from 'vuex'
import NavBar from '@/components/Navbar.vue'


export default {
  components:{ NavBar },
  methods:{
    ...mapActions({loadUser:'auth/loadUser' }),
    ...mapMutations({hideNavbar:'hideNavbar'}),
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

.flex_column_container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top:5rem;
}

.observer{
    height:30px;
}

</style>
