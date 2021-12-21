const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  gpa: {
    type: Sequelize.DECIMAL(2, 1),
    validate: {
      min: 0,
      max: 4
    }
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
  }

});

module.exports = Student;