const User=require('../../db/models/user')
// Portfolioya ait Kullanıcıların Listesi
const getPortfolioOwner = async (req, res) => {
    const { portfolioId } = req.params;

    try {
        const portfolio = await models.portfolio.findByPk(portfolioId, {
            include: {
                model: User,
                attributes: ['id', 'username', 'email']
            }
        });
        if (!portfolio) {
            return res.status(404).json({ message: 'Portfolio Bulunamadı' });
        }
        const { User: user } = portfolio.toJSON();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports=getPortfolioOwner;