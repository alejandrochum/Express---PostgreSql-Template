const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },

  description: {
    type: Sequelize.TEXT,
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.uidownload.com/files/644/1002/501/flat-university-vector.jpg'
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  }

});

module.exports = Campus;