<template>
    <div class="flex_column_container">

        <div v-if="error">
            {{error}}
        </div>
   

        <slot-form>
            <template #header> Login </template>
            <template #input1>
                <input type="text" v-model="login_email" name="email" id="email" placeholder="email">
            </template>
            <template #input2>
                <input type="password" v-model="login_password" name="password" id="password" placeholder="Password">
            </template>
            <template #form_button1>
                <button-1 @click.prevent="login"> Login </button-1>
            </template>
        </slot-form>
        


    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import {authMutationsIds} from '@/store/authModule/mutations'

    export default {

        data(){
            return{
                login_email:'',
                login_password:''
            }
        },
        methods:{
            ...mapActions({
               handleLogin:'auth/login'
           }),
           ...mapMutations({setError:'auth/'+authMutationsIds.SET_ERROR}),
           login(){
               this.handleLogin({email:this.login_email , password:this.login_password})
           }
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

   
    



</style>