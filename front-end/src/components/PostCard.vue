<template>
    <div class="card">
        <img :src="img" alt="">
        <h1> {{title}} </h1>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:'Article text'
            },
            img:{
                type:String
            }
        },
       
    
    }
</script>

<style>



.card{
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card h1{
    position: relative;
    z-index: 2;
}

.card img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    opacity: 0.7;
}


@media only screen and (min-width:320px) {
    .card{
        width: 19rem;
        height: 19rem;
    }

    .card img{
        max-width: 19rem;
        max-height: 19rem;
    }


}

@media only screen and (min-width: 768px) {
    .card{
        width: 40rem;
        height: 10rem;
    }

    .card img{
        display: none;
    }
}

@media only screen and (min-width: 1440px) {
    .card{
        width: 19rem;
        height: 19rem;
    }

    .card img{
        max-width: 19rem;
        max-height: 19rem;
        display: block;
    }

    
}

</style>