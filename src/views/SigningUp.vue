<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to a SignUpPage"/> -->
    <SignUp />
    <Panel />
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SignUp from '@/components/SignUp.vue'
import Panel from '@/components/Panel.vue'
import Posts from '@/components/Posts.vue'

export default {
  name: 'SigningUp',
  components: {
    // HelloWorld,
    SignUp,
    Panel,
    Posts
  }
}
</script>
