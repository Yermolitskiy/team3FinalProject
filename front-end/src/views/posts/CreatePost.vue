<template>
    <div>
        <custom-form @onSubmit="createPost" formType="postForm">
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
import { mapActions } from 'vuex'
import { actionsIds } from '../../store/postModule/actions'
    export default {
        methods:{
            createPost(data){
                this.handleCreatePost({data})
            },
            ...mapActions({handleCreatePost : 'post/' + actionsIds.CREATE_POST})
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