async function getShare(req, res) {
    try {
        const share = await models.share.findByPk(req.params.id);
        if (!share) {
            return res.status(404).json({ message: 'Hisse Bulunamadı' });
        }
        res.json(share);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports=getShare;