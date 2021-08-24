<template>
    <div>
        <custom-form @onSubmit="test" formType="postForm">
            <template #header>
                New Post
            </template>

            <template #submit_button>
                Add post
            </template>


        </custom-form>
    </div>
</template>

<script>
    export default {
        methods:{
            test(data){
                console.log(data)
            }
        }
    }
</script>

<style  scoped>

  div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>