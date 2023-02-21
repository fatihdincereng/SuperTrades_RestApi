async function update(req, res) {
    try {
        const share = await models.share.findByPk(req.params.id);
        if (!share) {
            return res.status(404).json({ message: 'Hisse Bulunamadı' });
        }
        await share.update(req.body);
        res.json(share);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports=update;