const { Router } = require('express');


const router = Router();

// Tüm portföyleri listele
router.get('/', controllers.portfolio.list);

// Belirli bir portföyü görüntüle
router.get('/:id', controllers.portfolio.getPortfolio);

// Portfolyo Sahibini Gösterir
router.get('/getPortfolioOwner/:portfolioId', controllers.portfolio.getPortfolioOwner);

// Yeni bir portföy oluştur
router.post('/', controllers.portfolio.create);

// Belirli bir portföyün bilgilerini güncelle
router.put('/:id', controllers.portfolio.updatePortfolio);

// Belirli bir portföyü sil
router.delete('/:id', controllers.portfolio.deletePortfolio);

module.exports = router;




