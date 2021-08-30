<template>
   <form>
       <div class="form_header">
        <slot name="header"></slot>
       </div>

      <div v-if="Array.isArray(errors)">
        <div v-if="errors.length" class="errorMsg">
            <ul>
            <li v-for="(validationError , i) in errors" :key="'error'+i" class="error">
                {{validationError}}
            </li>
            </ul>
        </div>
      </div>

        <div class="form_wrapper">
          <slot name="input1"></slot>
          <slot name="input2"></slot>
          <slot name="input3"></slot>
          <slot name="input4"></slot>
          <slot name="input5"></slot>
          <slot name="input6"></slot>
          <slot name="input7"></slot>
          <slot name="input8"></slot>
          <slot name="input9"></slot>
          <slot name="input10"></slot>
        </div>

        <div>
          <slot name="extra_content"></slot>
        </div>

        <div class="form_button_wrapper">
          <slot name="form_button1"></slot>
          <slot name="form_button2"></slot>
          <slot name="form_button3"></slot>
        </div>



   </form>
   
</template>

<script>
    export default {
        name:'slot-form',
        props:{
          errors:{
            type: Object , 
            default:() => {}
          }
        }
    }

    
</script>

<style>


@media only screen and (min-width: 325px) {

 .form_button_wrapper{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
 }
 .button_wrapper button{
   margin:15px 0 10px 0;
 }

  form {
    min-width: 20rem;
    max-width: 30rem;
    min-height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

   textarea {
    resize: none;
    min-width: 18.5rem;
    border: 1px solid rgba(91, 121, 240, 0.3);
  }

  input {
  border: 1px solid rgba(91, 121, 240, 0.3);
  min-height: 1.4rem;
  max-height: 3rem;
}

  .form_header {
    margin: 10px 0 10px 0;
    color: rgb(41, 62, 148);
    font-weight: 600;
    font-size: 20px;
  }
  .form_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form_wrapper input {
    width: 18.5rem;
    margin: 10px 0 20px 0;
  }
}

@media only screen and (min-width: 768px) {
  form {
    min-width: 25rem;
    max-width: 45rem;
  }
  .form_wrapper input {
    width: 21.5rem;
  }
  textarea {
    min-width: 29.5rem;
  }
}

@media only screen and (min-width: 1448px) {
  textarea {
    min-width: 38rem;
  }
}

.errorMsg{
    width:20rem;
    display: flex;
    margin:10px 0 10px 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: rgb(235, 117, 117);
}
.error  {
  margin: 5px 0 0 5px;
  font-size: .8rem;
  text-align: left;
   list-style-type:circle;
}

::placeholder {
  color: rgb(91, 121, 240);
  font-weight: 400;
}


</style>