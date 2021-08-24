<template>
    <div class="error_wrapper">
        <h1>
            404
        </h1>
        <h3>
            Page not found
        </h3>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>

 .error_wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
   
     h1,h3{
        margin:0;
    }
    @media only screen and (min-width:325px) {
        .error_wrapper{
            height: 70vmax;
        }
        h1  {
            font-size: 6rem;
            }
        h3{
            font-size: 1.8rem;
        }
    }
     @media only screen and (min-width:728px) {
        h1  {
            font-size: 7.5rem;
            }
        h3{
            font-size: 2.3rem;
        }
    }
     @media only screen and (min-width:1440px) {

        .error_wrapper{
            height: 50vmax;
        }
        h1  {
            font-size: 10rem;
            }
        h3{
            font-size: 5rem;
        }
    }
  
   


</style>