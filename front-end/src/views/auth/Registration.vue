<template>
    <div>

          <custom-form @onSubmit="handleRegister" :formType="'register'">
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
    export default {
        methods:{
            handleRegister(data){
                console.log(data)
            }
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