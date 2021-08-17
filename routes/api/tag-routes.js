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

  //DONE find a single tag by its `id`
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

  //DONE create a new tag
  router.post('/', async (req,res) => {
    try {
        await Tag.create(req.body);
        res.json({message: "Tag created!"});
    } catch(err) {
        res.json(err);
    }
});

  //DONE update a tag's name by its `id` value
  router.put('/:id', async (req,res) => {
    const { id } = req.params;
    try {
      await Tag.update(req.body, {where: { id } });
        res.json({message: "Tag updated!"});
    } catch(err) {
        res.json(err);
    }
  });

  //DONE delete on tag by its `id` value
  router.delete('/:id', async (req,res) => {
    const { id } = req.params;
    try {
        const result = await Tag.destroy({where: { id } });
        res.json(result);
    } catch(err) {
        res.json(err);
    }
  });

module.exports = router;
