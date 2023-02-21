const { Router } = require('express');


const router = Router();

// Tüm hisseleri listele
router.get('/', controllers.share.list);

// Belirli bir hisseyi görüntüle
router.get('/:id', controllers.share.getShare);

// Yeni bir hisse oluştur
router.post('/', controllers.share.create);

// Belirli bir hissenin bilgilerini güncelle
router.put('/:id', controllers.share.update);

// Belirli bir hisseyi sil
router.delete('/:id', controllers.share.destroy);



module.exports = router;

