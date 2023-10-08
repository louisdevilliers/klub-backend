const Category = require('../models/Category');

 const addCategory = async (req, res) => {
    try {
      // Category data to be added
      const categoryData = {
        id: 1,
        name: 'Burgers',
        isActive: true,
      };
  
      // Create the category
      const newCategory = await Category.create(categoryData);
  
      res.status(201).json({ category: newCategory });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding category' });
    }
  };
  const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json({ categories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving categories' });
    }
};

  module.exports = {
    addCategory, getCategories
  };
  