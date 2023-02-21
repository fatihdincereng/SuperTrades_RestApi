const getPortfolio = async (req, res) => {
    try {
        const { id } = req.params;
        const portfolio = await models.portfolio.findOne({
            where: { id },
        });
        if (portfolio) {
            return res.status(200).json({ portfolio });
        }
        return res.status(404).send('Belirtilen kimliğe sahip portföy mevcut değil');
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports=getPortfolio;