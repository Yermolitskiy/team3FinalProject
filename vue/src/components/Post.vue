<template>
  <form v-if="currentPost" class="edit-form">
    <h4 class="title1">Post</h4>
    
    <form>
      <div>
        <input type="text" class="input" id="title"
          v-model="currentPost.title"
        />
        
      </div>
      <div>
        <input type="text" class="text-input" id="description"
          v-model="currentPost.description"
        />
      </div>

      <div>
        <label><strong>Status:</strong></label>
        {{ currentPost.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="button-blog"
      v-if="currentPost.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="button-blog"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="button-blog"
      @click="deletePost"
    >
      Delete
    </button>

    <button type="submit" class="button-blog"
      @click="updatePost"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </form>

</template>

<script>
import PostDataService from "../services/PostDataService";

export default {
  name: "post",
  data() {
    return {
      currentPost: null,
      message: ''
    };
  },
  methods: {
    getPost(id) {
      PostDataService.get(id)
        .then(response => {
          this.currentPost = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentPost.id,
        title: this.currentPost.title,
        description: this.currentPost.description,
        published: status
      };

      PostDataService.update(this.currentPost.id, data)
        .then(response => {
          console.log(response.data);
          this.currentPost.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePost() {
      PostDataService.update(this.currentPost.id, this.currentPost)
        .then(response => {
          console.log(response.data);
          this.message = 'The post was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePost() {
      PostDataService.delete(this.currentPost.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getPost(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  margin: auto;
  padding: 30px 25px;
  background: white;
}

body {
  width: 100%;
}


h4.title {
  margin: -28px -25px 25px;
  padding: 15px 25px;
  line-height: 30px;
  font-size: 25px;
  font-weight: 300;
  color: #ADADAD;
  text-align:center;
  background: #f7f7f7;
 
}

.input {
  width: 80%;
  height: 50px;
  margin-bottom: 25px;
  padding-left:10px;
  font-size: 15px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.text-input {
  width: 80%;
  height: 500px;
  margin-bottom: 25px;
  padding-left:10px;
  font-size: 15px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.input:focus {
    border-color:#6e8095;
    outline: none;
  }
.text-input:focus {
    border-color:#6e8095;
    outline: none;
  }
.button-blog {
  width: 10%;
  height: 50px;
  padding: 0;
  font-size: 20px;
  color: #fff;
  text-align: center;
  background: #f0776c;
  border: 0;
  border-radius: 5px;
  cursor: pointer; 
  outline: 0;
  margin-bottom: 5;
  margin-top: 5;
  margin-right: 5px;
  margin-left: 5;
}
</style>
