const express = require("express");
const cors = require("cors");
const {resolve} = require('path')

const app = express();
app.use(history());

var corsOptions = {
  origin: "http://localhost:8081"
  // origin: "https://nodevueacc.herokuapp.com"
};

app.use(cors(corsOptions));

//folder where will be stored publically available post images and maybe any other static files
app.use('/public',express.static(resolve(__dirname , './app/public')))


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
// db.sequelize.sync();
//for the development mode:
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    initial();
  });
  // handle production: 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));
  // Handle SPA:
  // app.get('/.*/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Blog application." });
});

require("./app/routes/post.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

/* For production, have to insert these rows manually and use sync() without parameters to keep data:

...
const app = express();
app.use(...);

const db = require("./app/models");

db.sequelize.sync();
...

*/