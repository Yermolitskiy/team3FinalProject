
// import axios from 'axios';
// import authHeader from './auth-header';

// const API_URL = 'http://localhost:8080/api/test/';

// class UserService {
//   getPublicContent() {
//     return axios.get(API_URL + 'all');
//   }

//   getUserBoard() {
//     return axios.get(API_URL + 'user', { headers: authHeader() });
//   }

//   getModeratorBoard() {
//     return axios.get(API_URL + 'mod', { headers: authHeader() });
//   }

//   getAdminBoard() {
//     return axios.get(API_URL + 'admin', { headers: authHeader() });
//   }
// }

// export default new UserService();

//     not variant:


// export default function authHeader() {
//     let user = JSON.parse(localStorage.getItem('user'));
  
//     if (user && user.accessToken) {
//       return { Authorization: 'Bearer ' + user.accessToken };
//     } else {
//       return {};
//     }
//   }

// variant:
import api from './api';

class UserService {
  getPublicContent() {
    return api.get('/test/all');
  }

  getUserBoard() {
    return api.get('/test/user');
  }

  getModeratorBoard() {
    return api.get('/test/mod');
  }

  getAdminBoard() {
    return api.get('/test/admin');
  }
}

export default new UserService();
