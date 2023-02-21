// Belirli bir işlemi görüntüler
async function getTransaction(req, res) {
    const id = req.params.id;
    try {
        const transaction = await models.transaction.findByPk(id);
        if (!transaction) {
            return res.status(404).json({ message: 'Belirtilen Id ye göre Transaction Bulunamadı' });
        }
        res.json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error' });
    }
}

module.exports=getTransaction;