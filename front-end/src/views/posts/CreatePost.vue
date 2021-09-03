<template>
    <div class="flex_column_container">
        <div v-if="error"> {{error}} </div>
        <div v-else-if="message"> {{message}} </div>

         <slot-form :errors="validationErrors">
            <template #header> Create new post </template>
            <template #input1>
                <input type="text" v-model="postFormValues.title"  name="title" id="title" placeholder="Post title">
            </template>
            <template #input2>
                <textarea  v-model="postFormValues.body" cols="30" rows="10" name="body" id="body" placeholder="Post body"></textarea>
            </template>
           
            
            <template #extra_content>
                <div v-if="postFormValues.postImage">
                    <p>Post Image 200x150 preview</p>
                    <img class="post_image_preview" :src="postFormValues.postImageUrl" alt="Post image preview">
                </div>
            </template>

            <template #form_button1>
                <button-1 style="background:green" @click.prevent="pickFile">Upload Image</button-1>
                <input type="file" style="display:none" ref="fileInput" accept="image/* , .jpg , .png" @change="onFilePicked" >
            </template>

            <template #form_button2>
                <button-1 @click.prevent="createPost"> Add post </button-1>
            </template>

        </slot-form>


    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import { actionsIds } from '@/store/postModule/actions'
import {postMutationsIds} from '@/store/postModule/mutations'
import validate from '@/utils/formValidator'

    
    export default {
        data(){
            return{
                validationErrors:[],
                postFormValues:{
                    title:'',
                    body:'',
                    postImage:null,
                    postImageUrl:null
                }
            }
        },
        methods:{
            createPost(){
                this.validationErrors = validate({data:this.postFormValues , type:'postForm'})
                //refactor this later
                if(!this.validationErrors.length)
                    this.handleCreatePost({data : this.postFormValues})

                this.postFormValues = { title:'', body:'', postImage:null, postImageUrl:null }
                
            },
            pickFile(){
                this.$refs.fileInput.click()
                },
            onFilePicked(event){
                const files = event.target.files
                this.postFormValues.postImage = files[0]
            
                if(this.postFormValues.postImage){
                    //picture preview
                    const fileReader = new FileReader()
                    fileReader.addEventListener('load' , () => this.postFormValues.postImageUrl = fileReader.result)
                    fileReader.readAsDataURL(files[0])
                }
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

 .post_image_preview{
    max-width: 200px;
    max-height: 150px;
    aspect-ratio: 3/2;
  }


</style>