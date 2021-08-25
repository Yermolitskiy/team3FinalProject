<template>
    <div>
         <div v-if="error">
            {{error}}
        </div>
          <custom-form @onSubmit="register" :formType="'register'">
            <template #header>
                Registration
            </template>
            <template #submit_button>
                    Sign up
            </template>
        </custom-form>

    </div>
</template>

<script>
import { mapActions ,  mapMutations, mapState  } from 'vuex'
import {authMutationsIds} from '../../store/authModule/mutations'
// import {authMutationsIds} from '@store/authModule/mutations'
    export default {
        methods:{
            register(data){
                console.log(data)
                //we don't want to send password confirm because in db there is no such field
                delete data['password_confirm']
                this.handleRegister(data)
                if(!this.error){
                    this.$router.replace('/')
               }
            },

            ...mapMutations({setError:'auth/'+authMutationsIds.SET_ERROR}),
            ...mapActions({
                handleRegister:'auth/register'
            })
        },
        mounted(){this.setError(' ')},
        computed:{
             ...mapState({
                 error: state => state.auth.error
             }),
        }
        
    }
</script>

<style scoped>

div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
div form{
    width:40rem;
}

</style>