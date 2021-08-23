<template>
  <div>
      <form v-on:submit.prevent action="">
          <input type="text" placeholder="Search..">
          <button>Search</button>
          <div v-for="post in posts" :key="post.title">
            {{ post.title }}
        </div>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
