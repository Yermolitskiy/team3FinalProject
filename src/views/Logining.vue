<template>
  <div class="Logining">
    <OLogIn msg="finally login page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import OLogIn from '@/components/OLogIn.vue'

export default {
  name: 'Logining',
  components: {
    OLogIn
  }
}
</script>
