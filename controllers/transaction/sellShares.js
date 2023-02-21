const sellShares = async (req, res) => {
    const { userId, shareId, quantity } = req.body;

    try {
        // Kullanıcı Varlığı Kontrolü
        const user = await models.user.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı Bulunamadı' });
        }

        // Hisse Varlığı Kontrolü
        const share = await models.share.findByPk(shareId);
        if (!share) {
            return res.status(404).json({ message: 'Hisse Bulunamadı' });
        }

        // Portfolyo Varlığı Kontrolü
        const portfolio = await models.portfolio.findOne({ where: { UserId: userId } });
        if (!portfolio) {
            return res.status(404).json({ message: 'Kullanıcıya Ait Portfolio Bulunamadı' });
        }


        // Kullanıcının satmak için yeterli hissesi olup olmadığını kontrol
        const portfolioShare = await models.portfolioshares.findOne({
            where: { PortfolioId: portfolio.id, ShareId: shareId }
        });
        if (!portfolioShare || portfolioShare.quantity < quantity) {
            return res.status(400).json({ message: 'Yetersiz Hisse' });
        }

        portfolioShare.quantity -= quantity;
        portfolioShare.price -= share.currentPrice;
        await portfolioShare.save();

        const portfolioDetails = await getPortfolio(userId);

        // İşlem Oluştur
        const transaction = await models.transaction.create({
            ShareId: shareId,
            PortfolioId:portfolio.id,
            type: 'sell',
            price: share.currentPrice,
            quantity: quantity
        });

        const transactionValue={
            user:user.username,
            share:share.name,
            sharePrice:share.currentPrice,
            portfolioName:portfolio.name,
            type: 'sell',
            quantity:quantity,
        }

        return res.status(200).json({ transactionValue, portfolioDetails });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};

//Güncel Portfolio Verilerini Getirme Metodu
const getPortfolio = async (userId) => {
    const portfolio = await models.portfolio.findOne({
        where: { UserId: userId },
        include: [{ model: models.share, through: models.portfolioshares }]
    });

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

    return summary;
};


module.exports=sellShares;