const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

 // DONE find all categories
  // be sure to include its associated Products
  router.get('/', async (req, res) =>{
    try {
        const data = await Category.findAll({
          include: [{ model: Product }],
        });
        res.json(data);
    } catch(err) {
        res.json(err);
    } 
});

  //DONE find one category by its `id` value
  // be sure to include its associated Products
  router.get('/:id', async (req, res) =>{
    try {
      const { id } = req.params;  
      const data = await Category.findByPk(id, {
          include: [{ model: Product }],
        });
        res.json(data);
    } catch(err) {
        res.json(err);
    } 
});

  // TODO create a new category
router.post('/', (req, res) => {

});

 //TODO update a category by its `id` value
router.put('/:id', (req, res) => {
 
});

 // TODO delete a category by its `id` value
router.delete('/:id', (req, res) => {
 
});

module.exports = router;
