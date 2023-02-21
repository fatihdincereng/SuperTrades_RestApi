const { Router } = require('express');


const router = Router();

// GET /transactions: Tüm işlemleri listeler
router.get('/', controllers.transaction.list);
// GET /transactions/:id: Belirli bir işlemi görüntüler
router.get('/:id', controllers.transaction.getTransaction);
// DELETE /transactions/:id: Belirli bir işlemi siler Örnek Json verileri
router.delete('/:id', controllers.transaction.destroy);



// POST /transactions/buy: Bir hisse senedi satın alma işlemi gerçekleştirir
router.post('/buyShares', controllers.transaction.buyShares);

// POST /transactions/sell: Bir hisse senedi satış işlemi gerçekleştirir
router.post('/sellShares', controllers.transaction.sellShares);

//Kullanıcının portföyündeki hisse senetlerini ve miktarlarını listeler
router.get('/getPortfolioSummary/:userId', controllers.transaction.getPortfolioSummary);

module.exports = router;