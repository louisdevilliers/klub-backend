
const Item = require('../models/Item');
const Category = require('../models/Category');

const categories = require('../controllers/categories');

const addItem = async (req, res) => {
    try {
      // Item data to be added
      const itemData = {
        id: 1,
        name: 'Cheddarmelt Burger',
        categoryId: 1,
        description: 'Delicious cheddar and mushroom burger with chips',
        price: 110.00,
      };
  
      // Check if the associated category exists
      const category = await Category.findByPk(itemData.categoryId);
      if (!category) {
        // If the category doesn't exist, create it first
        await categories.addCategory(req, res);
      }
  
      // Create the item
      const newItem = await Item.create(itemData);
  
      res.status(201).json({ item: newItem });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding item' });
    }
  };
  
  
  module.exports = {
    addItem,
  };
  