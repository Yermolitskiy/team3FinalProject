<template>
    <div>
        <div v-if="error"> {{error}} </div>
        <div v-else-if="postCreated"> Post is successfuly created </div>

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
import { mapActions, mapState } from 'vuex'
import { actionsIds } from '../../store/postModule/actions'
// import { actionsIds } from '@store/postModule/actions'
    
    export default {
        data(){
            return {
                postCreated:false
            }
        },
        methods:{
            createPost(data){
                this.handleCreatePost({data})
                    .then(() => {
                        if(!this.error) {
                            console.log("OOK")
                            this.postCreated = true}
                    })
            },
            ...mapActions({handleCreatePost : 'post/' + actionsIds.CREATE_POST})
        },
        computed:{
            ...mapState({error:state => state.post.error})
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