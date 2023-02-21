const updatePortfolio = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, UserId } = req.body;
      const [updatedRows] = await models.portfolio.update({ name, UserId }, {
        where: { id }
      });
      if (updatedRows) {
        const updatedPortfolio = await models.portfolio.findOne({ where: { id } });
        return res.status(200).json({ portfolio: updatedPortfolio });
      }
      throw new Error('Portfolio bulunamadı.');
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

module.exports=updatePortfolio;