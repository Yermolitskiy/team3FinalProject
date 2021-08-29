<template>
    <div v-if="postsLoading || authLoading">
        <div class="loader">

        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name:'loader',
        computed:{
            ...mapState({
                postsLoading:state => state.post.postsLoading,
                authLoading:state => state.auth.userLoading
            })
        }
    }
</script>

<style scoped>

.loader,
.loader:after {
  border-radius: 50%;
  width: 5em;
  height: 5em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(31, 28, 28, 0.2);
  border-right: 1.1em solid rgba(22, 20, 20, 0.2);
  border-bottom: 1.1em solid rgba(37, 31, 31, 0.2);
  border-left: 1.1em solid #0f0d0d;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load 1.1s infinite linear;
  animation: load 1.1s infinite linear;
}
@-webkit-keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>