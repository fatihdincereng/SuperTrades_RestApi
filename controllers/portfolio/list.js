async function list(req, res) {
    try {
      const portfolios = await models.portfolio.findAll();
      res.status(200).json(portfolios);
    } catch (error) {
      res.status(500).json({ message: error.message});
}
}

module.exports=list;