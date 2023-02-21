const deletePortfolio = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await models.portfolio.destroy({
            where: { id },
        });
        if (deleted) {
            return res.status(204).send('Portföy başarıyla silindi.');
        }
        throw new Error('Portfolio Not found');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = deletePortfolio;