const express = require('express');
const cors = require('cors');
const recipes = require('./recipes.json');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/pages/:category', (req, res) => {
  const category = req.params.category;
  if (recipes[category]) {
    res.json(recipes[category]);
  } else {
    res.status(404).send('Category not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
