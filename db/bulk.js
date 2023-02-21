async function startBulk() {

    const users = [
      { username: 'fatihdincer', email: 'fatihdincer@example.com', password: 123 },
      { username: 'mertdincer', email: 'mertdincer@example.com', password: 123 },
      { username: 'erdincsaribas', email: 'erdincsaribas@example.com', password: 123 },
      { username: 'alidincer', email: 'alidincer@example.com', password: 123 },
      { username: 'erkinakgoz', email: 'erkinakgoz@example.com', password: 123 }
    ];
  
    const portfolios = [
      { name: 'FatihPortfolio', UserId: '1' },
      { name: 'MertPortfolio', UserId: '2' },
      { name: 'ErdincPortfolio', UserId: '3' },
      { name: 'AliPortfolio', UserId: '4' },
      { name: 'ErkinPortfolio', UserId: '5' },
    ];
  
    const shares = [
      { name: 'Turkish Aırlınes', symbol: 'THY', currentPrice: 100.50 },
      { name: 'KOC HOLDING', symbol: 'KOC', currentPrice: 200.50 },
      { name: 'TUPRAS', symbol: 'TUP', currentPrice: 300.50 },
      { name: 'ASELSAN', symbol: 'ASL', currentPrice: 400.50 },
      { name: 'AKBANK', symbol: 'AKB', currentPrice: 500.50 },
    ]
  
    const userCount = await models.user.count();
    const portfolioCount = await models.portfolio.count();
    const shareCount = await models.share.count();
  
    if (userCount === 0) {
      models.user.bulkCreate(users)
        .then(() => {
          console.log('Kullanıcılar başarıyla oluşturuldu');
        })
        .catch((error) => {
          console.log('Hata:', error);
        });
    }
  
    if (portfolioCount === 0) {
      models.portfolio.bulkCreate(portfolios)
        .then(() => {
          console.log('Portföy başarıyla oluşturuldu');
  
        })
        .catch((error) => {
          console.log('Hata:', error);
        });
    }
  
    if (shareCount === 0) {
      models.share.bulkCreate(shares)
        .then(() => {
          console.log('Hisseler başarıyla oluşturuldu');
        })
        .catch((error) => {
          console.log('Hata:', error);
        });
    }
}


  global.startBulk = startBulk;

  module.exports=startBulk;