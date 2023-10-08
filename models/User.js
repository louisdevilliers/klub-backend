const Sequelize = require('sequelize');
const sequelize = require('../database'); // Update the path according to your directory structure

const Order = require('./Order');
// Define the User model
const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  birthdate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

//User.hasMany(Order);


// Export the User model
module.exports = User;
