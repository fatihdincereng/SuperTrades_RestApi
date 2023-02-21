// Bir işlemi sil
async function destroy(req, res) {
    const id = req.params.id;
    try {
        const transaction = await models.transaction.findByPk(id);
        if (!transaction) {
            return res.status(404).json({ error: 'İşlem Bulunamadı' });
        }
        await transaction.destroy();
        return res.status(204).end();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error' });
    }
}

module.exports=destroy;