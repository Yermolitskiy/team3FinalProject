<template>
  <div>
    <header>
      <h3>{{ content }}</h3>
      <div id="main-wrapper">

    
  
    <div class="primary-content col">
      <h2>Technologies used in Node:</h2>
      
    </div>
    <div class="primary-content col">
      <h3>"JWT"</h3>
      <p>JSON Web Token is an open standard for securely transferring data within parties using a JSON object. JWT is used for stateless authentication mechanisms for users and providers, this means maintaining session is on the client-side instead of storing sessions on the server. Here, we will implement the JWT authentication system in NodeJs.</p>
      
    </div>
    <div class="primary-content col">
      <h3>"MULTER"</h3>
      <p>Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.</p>
      
    </div>
    <div class="primary-content col">
      <h3>"Sequelize"</h3>
      <p>Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.</p>
      
    </div>
    <div class="primary-content col">
      <h3>"Bcryptjs"</h3>
      <p>The bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every password with a salt.</p>
      
    </div>
    <div class="primary-content col">
      <h3>"Cors"</h3>
      <p>CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</p>
      
    </div>
    <div class="primary-content col">
      <h3>"Express"</h3>
      <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. </p>
      
    </div>
    
    <div class="secondary-content col">
      <h2>Technologies used in VUE module:</h2>
      
    </div>
    <div class="secondary-content col">
      <h3>"vee-validate"</h3>
      <p>vee-validate is a template-based validation framework for Vue.js that allows you to validate inputs and display errors.</p>
      
    </div>
    <div class="secondary-content col">
      <h3>"vue-router"</h3>
      <p>Vue Router is the official router for Vue.js (opens new window). It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.</p>
      <hr>
    </div>
    <div class="secondary-content col">
      <h3>"vuex"</h3>
      <p>Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension (opens new window) to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.</p>
      <hr>
    </div>
    <div class="secondary-content col">
      <h3>"yup"</h3>
      <p>Yup is a JavaScript schema builder for value parsing and validation. Define a schema, transform a value to match, validate the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformations.</p>
      <hr>
    </div>
  
    <footer class="main-footer">
      <p>&copy;2021 Accenture Bootcamp project by AJ</p>
    </footer>
  
</div>
    </header>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Home",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
<style scoped>
/*
Additional normalize.css to lists 
=============================== */

ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Page Styles
================================ */

body {
	font: normal 1.1em/1.5 sans-serif;
	color: #222;
	background-color: #edeff0;
}

#main-wrapper {
  width: 90%;
  margin: auto;
}

/* Layout Element Colors
========================= */

.main-header { background-color: #384047; }
.main-logo { background-color: #5fcf80; }
.main-nav li { background-color: #3f8abf; }
.primary-content { background-color: #caebf6; }
.secondary-content { background-color: #bfe3d0; }
.main-footer { background-color: #b7c0c7; }

/* Header, Banner and Footer Layout
=================================== */

.main-header {
  padding: 20px;
}

.main-logo,
.main-nav,
.main-nav li {
  display: inline;
  padding: 10px 20px;
  border-radius: 5px;
}

.main-logo {
  margin-right: 50px;
}

.main-logo a,
.main-nav a {
  color: white;
  text-decoration: none;
}












</style>
