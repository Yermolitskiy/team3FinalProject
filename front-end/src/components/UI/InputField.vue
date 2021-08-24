<template>
    <input type="text"  :name="name" :placeholder="name" :id="name"/>
</template>

<script>
    export default {
        name:'input-field',
        props:{
            name:{
                type:String,
                required:true
            },
           
        }
    }
</script>


<style  scoped>



</style>