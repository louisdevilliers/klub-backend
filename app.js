const express = require('express');
const app = express();
const itemRoutes = require('./routes/items');
const categoryRoutes = require('./routes/categories');
const routes = require('./routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const sequelize = require('./database'); 

app.use(routes);


app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

sequelize.sync()
.then(() => {
  const port = 8080;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
.catch(err => {
  console.error('Error syncing database:', err);
});