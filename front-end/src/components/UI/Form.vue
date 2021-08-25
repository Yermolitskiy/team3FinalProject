<template>
  <form>
    <div class="form_header">
      <slot name="header">Header</slot>
    </div>

    <div v-if="validationErrors.length" class="errorMsg">
        <ul  >
          <li v-for="(validationError , i) in validationErrors" :key="'error'+i" class="error">
            {{validationError}}
          </li>
        </ul>
    </div>

    <div
      v-if=" formType === 'register'"
      class="form_wrapper"
    >
      <input
        v-model="inputValues.register.name"
        placeholder="name"
        name="name"
        id="name"
      />
      <input
        v-model="inputValues.register.surname"
        placeholder="surname"
        name="surname"
        id="surname"
      />
      <input
        v-model="inputValues.register.email"
        placeholder="email"
        name="email"
        id="email"
      />
      <input
        v-model="inputValues.register.age"
        type="number"
        placeholder="age"
        name="age"
        id="age"
      />
      <input
        v-model="inputValues.register.password"
        type="password"
        placeholder="password"
        name="password"
        id="password"
      />
      <input
        v-model="inputValues.register.password_confirm"
        type="password"
        name="password_confirm"
        placeholder="confirm password"
        id="password_confirm"
      />
    </div>

    <div v-else-if="formType === 'login'" class="form_wrapper">
        
      <input
        v-model="inputValues.login.email"
        name="email"
        placeholder="email"
        id="email"
      />
      <input
        v-model="inputValues.login.password"
        type="password"
        placeholder="password"
        name="password"
        id="password"
      />
    </div>

    <div
      v-else-if=" formType === 'postForm'"
      class="form_wrapper"
    >
       


      <input
        class="postTitle"
        v-model="inputValues.postForm.title"
        name="title"
        placeholder="title"
        id="title"
      />
      <textarea
        v-model="inputValues.postForm.postBody"
        placeholder="text"
        name="postBody"
        id="postBody"
        cols="30"
        rows="10"
      ></textarea>
    </div>

    <div v-else>
      <slot></slot>
    </div>

    <div class="submit_btn">
      <button-1
        :class="{
          postButton: formType === 'postForm',
        }"
        @click.prevent="submit"
      >
        <slot name="submit_button"> Submit </slot>
      </button-1>
  
    </div>

    

  </form>
</template>

<script>
import validator from '@/utils/formValidator.js'
export default {
  name: "custom-form",
  data() {
    return {
      inputValues:{
        register: {
          name: "",
          surname: "",
          email: "",
          password: "",
          password_confirm: "",
          age: "",
          },
        login:{
          email: "",
          password: "",
          },
        postForm:{
          postBody: "",
          title: "",
        }
      },
     

      validationErrors:[]
    };
  },

  props: {
    formType: {
      type: String,
      default: undefined,
    },
  },

  methods: {
    submit() {
      //TODO::add form validation

      const errors = validator(this.inputValues[this.formType] , this.formType)

      if(!errors.length){
        this.validationErrors = []
        this.$emit('onSubmit' , this.inputValues[this.formType] )
        }
      else 
        this.validationErrors = errors
    },
  },
};
</script>

<style  scoped>


@media only screen and (min-width: 325px) {
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

 
  .postButton {
    margin: 20px 0 10px 0;
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
::placeholder {
  color: rgb(91, 121, 240);
  font-weight: 400;
}



@media only screen and (min-width: 768px) {
  form {
    min-width: 25rem;
    max-width: 45rem;
  }
  .form_wrapper input {
    width: 21.5rem;
  }
  .postTitle {
    min-width: 29.5rem;
  }
  textarea {
    min-width: 29.5rem;
  }
  .postButton {
    width: 18rem;
  }
}

@media only screen and (min-width: 1448px) {
  textarea {
    min-width: 38rem;
  }
  .postTitle {
    min-width: 38rem;
  }
  .postButton {
    width: 22rem;
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

</style>