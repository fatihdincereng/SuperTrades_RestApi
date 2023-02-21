async function buyShares(req, res) {
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
        if(!portfolio){
            return res.status(404).json({ message: 'Kullanıcıya Ait Portfolio Bulunamadı' });
        }
        // Kullanıcının portföyüne pay ekle
        await addShareToPortfolio(userId, shareId, quantity, share.currentPrice);

        // Satın alımdan sonra değişen portfoy;
        const portfolioDetails = await getPortfolio(userId);

        // İşlem Oluştur
        const transaction = await models.transaction.create({
            ShareId: shareId,
            PortfolioId:portfolio.id,
            type: 'buy',
            price: share.currentPrice,
            quantity: quantity
        });

        //Transaction Detaylarına Erişim
        const transactionValue = {
            user: user.username,
            share: share.name,
            sharePrice: share.currentPrice,
            portfolioName:portfolio.name,
            type: 'buy',
            quantity: quantity,
        }

        return res.status(200).json({ transactionValue, portfolioDetails });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};

//Güncel Portfolio Verilerini Getirme Metodu
const getPortfolio = async (userId) => {
    console.log("Hadiiiii");
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

// Portfoye Hisse Ekleme Metodu
const addShareToPortfolio = async (userId, shareId, quantity, price) => {
    let portfolio = await models.portfolio.findOne({ where: { UserId: userId } });
    if (!portfolio) {
        portfolio = await models.portfolio.create({ UserId: userId });
    }
    const portfolioShare = await models.portfolioshares.findOne({
        where: { PortfolioId: portfolio.id, ShareId: shareId }
    });
    if (portfolioShare) {
        portfolioShare.quantity += quantity;
        portfolioShare.price += price;
        await portfolioShare.save();
    } else {
        await models.portfolioshares.create({
            PortfolioId: portfolio.id,
            ShareId: shareId,
            quantity: quantity,
            price: price
        });
    }
    return true;
};


module.exports = buyShares;