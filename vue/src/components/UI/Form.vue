<template>
<div class="wrapper">
    <form class="form-wrapper">
        <div class="form-header">
            <slot name="header"></slot>
        </div>

        <div class="form-container__inputs">
            <slot name="input1"/>
            <slot name="input2"/>
            <slot name="input3"/>
            <slot name="input4"/>
            <slot name="input5"/>
        </div>

        <div class="form-container__buttons">
            <slot name="button1"/>
            <slot name="button2"/>
            <slot name="button3"/>
        </div>

        <div class="form-container__additional">
            <slot name="additional_content1"/>
            <slot name="additional_content2"/>
            <slot name="additional_content3"/>
        </div>


    </form>
</div>

</template>

<script>
    export default {
        
    }
</script>

<style>

.form-wrapper{
    width:80%;
    border: 1px solid #c4c4c4;
    display: flex;
    flex-direction: column;
}

.form-container__inputs{
    display: flex;
    flex-direction: column;
    padding:1rem;
    
}

.form-container__inputs > *{
    margin:10px 0 20px 0;
}

.form-header{
    font-size: 20px;
    padding:20px 0 20px 0;
    background: #f7f7f7;
    color: #ADADAD;
    line-height: 30px;
}

.form-container__additional{
    margin:30px 0 20px 0;
}

.form-container__buttons{
    display: flex;
    justify-content: space-evenly;
}

.form-container__buttons button{
    width: 8rem;
}

.wrapper{
    display: flex;
    justify-content: center;
    margin:3rem 0 2rem 0;
}

textarea {
    resize: none;
    min-width: 18.5rem;
    border: 1px solid #c4c4c4;
    height: 500px;
  }

input[type=file]{
    display: none;
}

input[type=text]{
    min-height: 23px;
}

button{
      /* cursor: pointer;
        margin:0 10px 0 10px;
        min-width: 5rem;
        min-height: 1.8rem;
        border:none;
        color:white; */
    width: 10%;
    height: 50px;
    padding: 0;
    font-size: 17px;
    color: #fff;
    text-align: center;
    background: #f0776c;
    border: 0;
    border-radius: 5px;
    cursor: pointer; 
    outline: 0;
    margin-bottom: 5;
    margin-top: 5;
    margin-right: 5px;
    margin-left: 5;
}



.success_btn{
    background: green;
}

.additional_btn1{
    background:#3356A8
}

.additional_btn2{
    background:#739AF5;
}

.danger_btn{
    background: #F59E8C;
}

img{
    max-width: 300px;
    max-height: 200px;
    aspect-ratio: 3/2;
}


@media only screen and (min-width:1440px) {
}



</style>