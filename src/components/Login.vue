<template>
<div>
    <!-- <h2>{{ title }}</h2> -->
    <form v-on:submit.prevent action="">
        <input type="text" />
        <input type="password" />
        <!-- <button @click="authType.callBack">{{ authType.title }}</button> -->
        <button>Login</button>
    </form>
</div>
</template>

<script>
// add an event handler
export default {
  name: 'Login',
  props: {
    title: String
    // callBack: Function,
  }
}
</script>

<style scoped>

</style>
