const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

// Create and Save a new Post
exports.create = (req, res) => {
  
};

// Retrieve all Posts from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Post with an id
exports.findOne = (req, res) => {
  
};

// Update a Post by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Post with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Posts from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Posts
exports.findAllPublished = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

   
  
    // Create a post
    const post = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
      imageUrl: req.file ? `${express.static(__dirname) + /public/uploads/posts}/${req.file.filename}` : false,//`http://localhost:8080/public/uploads/posts/${req.file.filename}` : false, //frwahxxknm9kwy6c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306 // http://https://nodevueacc.herokuapp.com/public/uploads/posts/${req.file.filename}
      // imageUrl: req.body.file ? `${process.env.API_URL}${process.env.PUBLIC_POSTS_STATIC}${req.file.filename}`,
    };
  
    // Save post in the database
    Post.create(post)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the post."
        });
      });
  };

  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Post.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving posts."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Post.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Post with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Post.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Post was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Post with id=${id}. Maybe Post was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Post with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Post.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Post was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Post with id=" + id
        });
      });
  };
  
  exports.deleteAll = (req, res) => {
    Post.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Posts were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all posts."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Post.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving posts."
        });
      });
  };
  
