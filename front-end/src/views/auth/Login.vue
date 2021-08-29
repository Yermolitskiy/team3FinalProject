<template>
    <div class="flex_column_container">

        <div v-if="error">
            {{error}}
        </div>
        <custom-form @onSubmit="login" :formType="'login'">
            <template #header>
                Login
            </template>
            <template #submit_button>
                    Sign in
            </template>
        </custom-form>


        


    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import {authMutationsIds} from '../../store/authModule/mutations'
// import {authMutationsIds} from '@store/authModule/mutations'
    export default {
        methods:{
           ...mapActions({
               handleLogin:'auth/login'
           }),
           ...mapMutations({setError:'auth/'+authMutationsIds.SET_ERROR}),
           login(data){
               this.handleLogin(data)
                .then(() => {
                    if(!this.error){
                        this.$router.replace('/')
                        }
                })

              
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