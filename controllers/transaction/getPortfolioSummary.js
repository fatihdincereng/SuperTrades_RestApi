const getPortfolioSummary = async (req, res) => {
    const userId = req.params.userId;

    try {
        // Kullanıcının var olup olmadığını kontrol etme
        const user = await models.user.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı Bulunamadı' });
        }
        // Kullanıcının portföyünü alma
        const portfolio = await models.portfolio.findOne({
            where: { UserId: userId },
            include: [{ model: models.share, through: models.portfolioshares }]
        });
        // Kullanıcının portfoyunun var olup olmadığını kontrol etme
        if (!portfolio) {
            return res.status(404).json({ message: 'Portfolio Bulunamadı' });
        }
        // Portföydeki her hisse için yatırım özetini hesaplayın
        const summary = portfolio.Shares.map(share => {
            const shareQuantity = share.PortfolioShares.quantity;
            const sharePrice = share.currentPrice;
            const totalInvestment = shareQuantity * sharePrice;
            return {
                shareId: share.id,
                shareName: share.name,
                quantity: shareQuantity,
                currentPrice: sharePrice,
                totalInvestment: totalInvestment
            };
        });
        return res.status(200).json(summary);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error' });
    }
};

module.exports=getPortfolioSummary;