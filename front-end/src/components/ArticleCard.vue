<template>
    <div class="article_container" >
        
        <div class="img_container" :style="randomBackgroundColor">
            <img :src="img ? img : require(`@/assets/posts_fallback_images/${randomPostFallbackImage}.jpg`)" class="image" alt="">
        </div>

        <div class="article_body">
                <div class="article_text">
                    <h2> {{title}} </h2>
                    <p> {{body}} </p>
                </div>
                
            <div class="info_container">
                    <hr/>
                        <div class="info_container_wrapper">

                            <div class="logo" :style="randomBackgroundColor">
                                {{authorInitials}}
                            </div>

                            <div class="author_wrapper">
                                <h4>{{author}}</h4>
                                <p>{{date}}</p>
                            </div>
                    </div>
                </div>

            </div>

           
          

        </div>


  
</template>

<script>
    export default {
        name:'article-card',
        data(){
            return{
                randomColors:[
                    'background-color:rgb(99,86,240)',
                    'background-color:rgb(98,156,240)',
                    'background-color:rgb(75,240,108)',
                    'background-color:rgb(240,211,50)',
                    'background-color:rgb(242,163,7)',
                    ],
                randomBackgroundImages:[
                    'biggie',
                    'husky',
                    'pug',
                    'shibi_inu',
                    'airdaleterriers',
                ]
            }
        },
        props:{
            img:{
                type:String
            },
            title:{
                type:String,
                default:'dummy title'
            },
            body:{
                type:String,
                default:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias omnis ipsum nulla velit vero nobis, numquam ea voluptatum? Accusantium sequi facere error quam labore quo harum veritatis aut, accusamus tenetur deleniti vero ea optio cupiditate exercitationem quaerat doloremque repudiandae nemo velit nulla praesentium repellendus tempore. Velit dolor ab incidunt! Lorem ipsum dolor sitLorem ipsum dolor sit am accusamus libero labore incidunt quidem corporis!  Lorem ipsum dolor sit amet consectetur, ing elit. Ab rem eveniet ipsa? Nulla dignissimos recusandae numquam, voluptas nihil facere est.'
            },
            author:{
                type:String,
                default:'dummy author'
            },
            date:{
                type:String,
                default:'21.08.2021'
            }
        },
    computed:{
        authorInitials(){
            return this.author.split(" ").map(n => n[0]).join('')
        },
        randomBackgroundColor(){
            return this.randomColors[Math.floor(Math.random()*this.randomColors.length)]
        },
        randomPostFallbackImage(){
            return this.randomBackgroundImages[Math.floor(Math.random()*this.randomBackgroundImages.length)]
        }
        
    }
    }
</script>

<style  >


@media only screen and (min-width:375px){
    .article_container{
        display:flex;
        flex-direction: column;
        border:2px solid black;
        max-width: 19rem;
    }
    .img_container{
        min-width: 19rem;
        min-height: 9.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .image{
        max-width: 19rem;
        max-height: 9.5rem;
    }
    .article_body{
        min-height: 18rem;
        display: flex;
        flex-direction: column;
    }
    .article_text{
        max-height: 10.5rem;
        min-height: 9.5rem;
        overflow: hidden;
    }
    .article_text p {
        text-align: left;
        font-size: .9rem;
        padding:10px 20px 10px 15px;
    }
    .article_text h2{
        font-size: 1.2rem;
    }
    .info_container{
        margin-top:auto;
        min-height: 5rem;
    }
    .info_container hr {
        width:95%;
    }
    .info_container_wrapper{
        display: flex;
    }
    .logo{
        margin-left: 1rem;
        height: 3rem;
        width:3rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .author_wrapper > p,
    .author_wrapper > h4
    {
        margin:3px 0 0 15px;
        text-align: left;
    }
    .author_wrapper > p{
        color: gray;
        font-size: .8rem;
    }

}





@media only screen and (min-width:768px) {
    .article_container{
        flex-direction: row;
        
        max-width: 38rem;
        height: 18rem;
    }
    .img_container {
        width: 19rem;
        height: 100%;
        
    }
    .image{
        max-width: 19rem;
        max-height: 100%;
    }
    .article_body {
        max-height: 18rem;
        width: 19rem;
    }
    .article_text{
        max-height: 15rem;
    }
    .info_container{
         height: 5rem;
         width: 100%;
         margin-top:40px;
    }     
}

@media only screen and (min-width:1440px) {
    .article_container{
        min-width: 76rem;
        height: 22rem;
    }
    .img_container{
        min-width:38rem;
    }
     .image{
        max-width: 38rem;
        max-height: 16rem;
        padding:1rem;
    }
    .article_body{
        max-height: 22rem;
        width: 38rem;
    }
    .article_text{
        min-height: 14rem;
    }
    .article_text h2 ,
    .article_text p {
         padding: 5px 35px 0 25px;
    }
    .article_text h2{
        font-size: 1.5rem;
        margin-top:25px;
        text-align: left;
    }
    
} 

</style>