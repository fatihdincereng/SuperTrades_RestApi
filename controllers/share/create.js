async function create(req, res) {
    try {
        const { symbol } = req.body;
        if (!/^\d+(\.\d{1,2})?$/.test(req.body.currentPrice)) {
            return res.status(400).json({ error: 'Fiyat 2 ondalık basamaklı bir sayı olmalıdır' });
        }
        if (symbol && (symbol.length !== 3 || !symbol.match(/^[A-Z]+$/))) {
            return res.status(400).json({ message: 'Hatalı Sembol Girdiniz' });
        }
        const share = await models.share.create(req.body);
        res.status(201).json(share);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports=create;