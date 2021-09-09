<template>
  <div class="all_cards">
     
  <div      
      :class="{ active: index == currentIndex }"
          v-for="(post, index) in posts"
          :key="index"
          @click="setActivePost(post, index)"
      >
      <div class="card">
        <router-link :to="'/posts/' + post.id"><img class="card-img-top-list" :src='post.imageUrl ? post.imageUrl : "https://lh3.googleusercontent.com/d/1RlTfZ1wVgMsgSN3b8L1bFameHjYxFDfz=s800?authuser=0"' alt="image" style="width:100%"></router-link>
        
        <div class="container">
          <h4><b>{{ post.title }}</b></h4>
          <p>{{ post.description }}</p>
          
        </div>
        
      </div>
    </div>
   
  </div>
</template>

<script>
import PostDataService from "../services/PostDataService";

export default {
  name: "posts-list",
  data() {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrievePosts() {
      PostDataService.getAll()
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePosts();
      this.currentPost = null;
      this.currentIndex = -1;
    },

    setActivePost(post, index) {
      this.currentPost = post;
      this.currentIndex = post ? index : -1;
    },

    removeAllPosts() {
      PostDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      PostDataService.findByTitle(this.title)
        .then(response => {
          this.posts = response.data;
          this.setActivePost(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrievePosts();
  }
};
</script>

<style>

.card-img-top-list {
  object-fit: none; /* Do not scale the image */
  object-position: center; /* Center the image within the element */
  width: 100%;
  max-height: 100px;
  margin-bottom: 1rem;
}
.content {
  max-width: 500px;
  margin: auto;
  display: flex;
}
.all_cards {
  margin-top: 25px;
  margin-left: 20%;
  margin-right: 20%;
  height: 100%;
  position: relative;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
  justify-content: center;
  margin-bottom: 25px;
  
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>
