// Kullanıcıya Portfolyo Ekledi
const getUserPortfolios = async (req, res) => {
    const { userId } = req.params;
    try {
        // Check if user exists
        const portfolios = await models.portfolio.findAll({
            where: {
              UserId: userId
            },
        });
        return res.status(200).json(portfolios);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports=getUserPortfolios;