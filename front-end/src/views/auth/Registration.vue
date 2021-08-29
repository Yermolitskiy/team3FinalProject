<template>
    <div class="flex_column_container">
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
                //we don't want to send password confirm because in db there is no such field
                delete data['password_confirm']
                this.handleRegister(data)
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