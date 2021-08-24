<template>
    <div class="card">
        <h1> {{title}} </h1>
        <p> {{body}} </p>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:'Article text'
            },
            body:{
                type:String,
                default:'Article Body'
            }
        }
    
    }
</script>

<style  scoped>

.card{
    margin-bottom: 2rem;
}

@media only screen and (min-width:320px) {
    .card{
        width: 19rem;
        height: 19rem;
        background-color: red;
    }
}

@media only screen and (min-width: 768px) {
    .card{
        width: 40rem;
        height: 10rem;
        background-color: red;
    }
}

@media only screen and (min-width: 1440px) {
    .card{
        width: 19rem;
        height: 19rem;
        background-color: red;
    }
}

</style>