// Tüm işlemleri listele
async function list(req, res) {
    try {
        const transactions = await models.transaction.findAll();
        res.json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error' });
    }
}

module.exports=list;