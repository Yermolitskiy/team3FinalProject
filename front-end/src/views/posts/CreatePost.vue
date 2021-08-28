<template>
    <div>
        <div v-if="error"> {{error}} </div>
        <div v-else-if="message"> {{message}} </div>

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
import { mapActions, mapMutations, mapState } from 'vuex'
import { actionsIds } from '../../store/postModule/actions'
import {postMutationsIds} from '../../store/postModule/mutations'
// import { actionsIds } from '@store/postModule/actions'
    
    export default {
        
        methods:{
            createPost(data){
                //refactor this later
                this.handleCreatePost({data})
            },
            ...mapActions({handleCreatePost : 'post/' + actionsIds.CREATE_POST}),
            ...mapMutations({setMessage : 'post/' + postMutationsIds.SET_MESSAGE})
        },
        computed:{
            ...mapState({
                error:state => state.post.error,
                message:state => state.post.message})
        },
        beforeUnmount(){
            this.setMessage(null)
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