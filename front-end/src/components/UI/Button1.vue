<template>
    <button>
        <slot>Click</slot>
    </button>
</template>

<script>
    export default {
        name:'button-1'
    }
</script>

<style scoped>
 button{
        background-color:rgb(41, 62, 148);
        color:white;
        font-weight: 500;
        font-size: .9rem;
        min-width: 5rem;
        width:19rem;
        height: 1.8rem;
        border: none;
        margin:5px 0 5px 0;
    }

@media only screen and (min-width:768px) {
    button{
        width:22rem;
    }
}
</style>