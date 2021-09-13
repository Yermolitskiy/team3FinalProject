// import http from "../http-common";

// class PostDataService {
//   getAll() {
//     return http.get("/posts");
//   }

//   get(id) {
//     return http.get(`/posts/${id}`);
//   }

//   create(data) {
//     return http.post("/posts", data);
//   }

//   update(id, data) {
//     return http.put(`/posts/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/posts/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/posts`);
//   }

//   findByTitle(title) {
//     return http.get(`/posts?title=${title}`);
//   }
// }

// export default new PostDataService();
// import api from "./api";
import api from "./api";

class PostDataService {
    getAll() {
      return api.get("/posts");
    }
  
    get(id) {
      return api.get(`/posts/${id}`);
    }
  
    create(data) {
      return api.post("/posts", data);
    }
  
    update(id, data) {
      return api.put(`/posts/${id}`, data);
    }
  
    delete(id) {
      return api.delete(`/posts/${id}`);
    }
  
    deleteAll() {
      return api.delete(`/posts`);
    }
  
    findByTitle(title) {
      return api.get(`/posts?title=${title}`);
    }
  }
  
  export default new PostDataService();
