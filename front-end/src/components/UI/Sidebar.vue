<template>
    <div class="sidebar">
     
            <transition name="slide" mode="in-out">
                <div v-if="isNavOpen" class="sidebar-panel">
                    <slot></slot>
                </div>
            </transition>
      
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        computed:{
            ...mapState({
                isNavOpen:state => state.isNavOpen
            })
        }
    }
</script>

<style>

    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.5s ease;
    }

    
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }

    .slide-enter-from{
        transform: translateX(-100%);
    }

  

    .sidebar-panel {
        overflow-y: auto;
        background-color: rgb(230, 225, 228);
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 1rem 20px;
        width: 50%;
    }




</style>