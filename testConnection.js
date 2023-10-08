const sequelize = require('./database'); // Update the path according to your directory structure


const testConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  // Call the function to test the connection

  const { addItem } = require('./controllers/items');
  addItem(); // Call the addItem function

  testConnection();
  
