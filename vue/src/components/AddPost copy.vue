<template>
  <form class="edit-form">
    <div v-if="!submitted">
        <Form>
          <template #header>
            Share your thoughts with other
          </template>

          <template #input1>
            <div>
                <label for="title"> Title </label>
                <input
                  type="text"
                  id="title"
                  required
                  v-model="post.title"
                  name="title"
                  placeholder="Post title"
                />
            </div>
          </template>

          <template #buttontest @click.prevent="test">
            lol
          </template>

          <template #input2>
             <label for="description"> Enter your post description </label>
              <textarea name="description" required v-model="post.description" id="description" cols="30" rows="10"></textarea>
          </template>
          <template #button1>
            <button @click="savePost" class="success_btn">Submit</button>
          </template>

          <template #button2>
            <button @click.prevent="pickFile" class="additional_btn1" >Upload Image</button>
            <input type="file" ref="fileInput" accept="image/* , .jpg , .png" @change="onFilePicked" >
          </template>

          <template #additional_content1>
             <div v-if="post.image">
                    <p>Post Image preview</p>
                    <img :src="post.imageUrl" alt="Post image preview">
                </div>
          </template>

        </Form>
      </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="button-blog" @click="newPost">Add</button>
    </div>
  </form>
</template>

<script>
import PostDataService from "../services/PostDataService";
import Form from '../components/UI/Form.vue'

export default {
  components:{Form},
  name: "add-post",
  data() {
    return {
      post: {
        id: null,
        title: "",
        description: "",
        published: false,
        image:null,
        imageUrl:null
      },
      submitted: false
    };
  },
  methods: {
    pickFile(){
                this.$refs.fileInput.click()
                },
            onFilePicked(event){
                const files = event.target.files
                this.post.image = files[0]

                if(this.post.image){
                  //picture preview
                  const fileReader = new FileReader()
                  fileReader.addEventListener('load' , () => this.post.imageUrl = fileReader.result)
                  fileReader.readAsDataURL(files[0])
                }
            
                
                },
    savePost() {

      let data

      if(this.post.image){
        data = new FormData()
        data.append('title' , this.post.title)
        data.append('description',this.post.description)
        data.append('image' , this.post.image)
      }else{
         data = {
          title: this.post.title,
          description: this.post.description
        };
      }

     

      PostDataService.create(data)
        .then(response => {
          this.post.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newPost() {
      this.submitted = false;
      this.post = {};
    }
  }
};
</script>

<style>

</style>
