<template>
    <div class="flex_column_container">
         <div v-if="error">
            {{error}}
        </div>
     
        <slot-form :errors="validationErrors">
            <template #header> Registration </template>
            <template #input1>
                <input type="text" v-model="registrationValues.name"  name="name" id="name" placeholder="name">
            </template>
            <template #input2>
                <input type="text" v-model="registrationValues.surname"  name="surname" id="surname" placeholder="surname">
            </template>
            <template #input3>
                <input type="text" v-model="registrationValues.email"  name="email" id="email" placeholder="email">
            </template>
            <template #input4>
                <input type="number" v-model="registrationValues.age"  name="age" id="age" placeholder="age">
            </template>
            <template #input5>
                <input type="password" v-model="registrationValues.password"  name="password" id="password" placeholder="password">
            </template>
            <template #input6>
                <input type="password" v-model="registrationValues.passwordConfirm"  name="password_confirm" id="password_confirm" placeholder="password confirmation">
            </template>
            <template #form_button1>
                <button-1 @click.prevent="register"> Register </button-1>
            </template>
        </slot-form>

    </div>
</template>

<script>
import { mapActions ,  mapMutations, mapState  } from 'vuex'
import validator from '@/utils/formValidator.js'
import {authMutationsIds} from '@/store/authModule/mutations'
    export default {
        data(){
            return{
                validationErrors:[],
                registrationValues:{
                        name:'',
                        surname:'',
                        email:'',
                        age:'',
                        password:'',
                        passwordConfirm:''
                }
                
            }
        },
        methods:{
            register(){
                this.validationErrors = validator({data:this.registrationValues , type:'register'})
                if(!this.validationErrors.length){
                    //we don't want to send password confirm because in db there is no such field
                    delete this.registrationValues['passwordConfirm']
                    this.handleRegister(this.registrationValues)
                }
            },
            ...mapMutations({setError:'auth/'+authMutationsIds.SET_ERROR}),
            ...mapActions({
                handleRegister:'auth/register'
            })
        },
        mounted(){this.setError(null)},
        computed:{
             ...mapState({
                 error: state => state.auth.error
             }),
        }
    }
</script>

<style scoped>


div form{
    width:40rem;
}

</style>