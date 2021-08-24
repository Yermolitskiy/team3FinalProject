<template>
    <div>
        <custom-form @onSubmit="handleLogin" :formType="'login'">
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
    export default {
        methods:{
            handleLogin(data){
                console.log(data)
            }
        }
    }
</script>

<style scoped>

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    



</style>