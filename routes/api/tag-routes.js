const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  //DONE find all tags
  // be sure to include its associated Product data
  router.get('/', async (req, res) =>{
    try {
        const data = await Tag.findAll({
          include: [{ model: Product }],
        });
        res.json(data);
    } catch(err) {
        res.json(err);
    } 
});

  //TODO find a single tag by its `id`
  // be sure to include its associated Product data
  router.get('/:id', async (req, res) =>{
    try {
      const { id } = req.params;  
      const data = await Tag.findByPk(id, {
          include: [{ model: Product }],
        });
        res.json(data);
    } catch(err) {
        res.json(err);
    } 
});

  //TODO create a new tag
router.post('/', (req, res) => {

});

  //TODO update a tag's name by its `id` value
router.put('/:id', (req, res) => {

});

  //TODO delete on tag by its `id` value
router.delete('/:id', (req, res) => {

});

module.exports = router;
