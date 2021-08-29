<template>
    <button :style="{backgroundColor : color}">
        <slot/>
    </button>
</template>

<script>
    export default {
    props:{
        color:{
            type:String,
            default:'lightblue'
        }
    },
     name:'article-button'   
    }
</script>

<style scoped>
    button{
        margin:0 10px 0 10px;
        min-width: 5rem;
        min-height: 1.8rem;
        border:none;
        color:white;
    }
</style>