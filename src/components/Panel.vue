<template>
  <div>
    <div>
      <h2>{{ title }}</h2>
      <div name="action" />
    </div>
    <div>
      <h2>No slot content defined</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
