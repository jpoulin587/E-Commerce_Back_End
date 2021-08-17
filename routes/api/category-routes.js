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

  //DONE create a new category
  router.post('/', async (req,res) => {
    try {
        await Category.create(req.body);
        res.json({message: "Category created!"});
    } catch(err) {
        res.json(err);
    }
});

 //DONE update a category by its `id` value
 router.put('/:id', async (req,res) => {
  const { id } = req.params;
  try {
    await Category.update(req.body, {where: { id } });
      res.json({message: "Category updated!"});
  } catch(err) {
      res.json(err);
  }
});

 // DONE delete a category by its `id` value
 router.delete('/:id', async (req,res) => {
  const { id } = req.params;
  try {
      const result = await Category.destroy({where: { id } });
      res.json(result);
  } catch(err) {
      res.json(err);
  }
});


module.exports = router;
