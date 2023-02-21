const { Router } = require('express');


const router = Router();

// Tüm kullanıcıları listeler
router.get('/', controllers.user.getAllUsers);

// Belirli bir kullanıcıyı görüntüler
router.get('/:id', controllers.user.getUserById);

// Yeni bir kullanıcı oluşturur
router.post('/', controllers.user.createUser);

// Belirli bir kullanıcının bilgilerini günceller
router.put('/:id', controllers.user.updateUser);

// Belirli bir kullanıcıyı siler
router.delete('/:id', controllers.user.deleteUser);

//Kullanıcıya bağlı portfolyo bilgilerini getirir.
router.get('/getUserPortfolios/:userId', controllers.user.getUserPortfolios);

module.exports = router;



