async function create(req, res) {
    try {
      const portfolio = await models.portfolio.create({
        name: req.body.name,
        UserId: req.body.userId,
      }); 
      res.status(201).json(portfolio);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

module.exports=create;
