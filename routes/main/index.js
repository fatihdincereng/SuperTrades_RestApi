const { Router } = require('express');


const router = Router();

router.get('/', (req, res) => {
    res.send('Hello Welcome To Super Trades')
});


module.exports = router;