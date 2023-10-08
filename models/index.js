// models/index.js

const User = require('./User');
const Order = require('./Order');
const Item = require('./Item');
const Category = require('./Category');

// Set up associations
User.hasMany(Order);
Order.belongsTo(User);
Order.belongsTo(Item);
Item.belongsTo(Category);
Category.hasMany(Item);
Item.hasMany(Order);

module.exports = {
  User,
  Order,
  Item,
  Category
};
