async function destroy(req, res) {
    try {
        const share = await models.share.findByPk(req.params.id);
        if (!share) {
            return res.status(404).json({ message: 'Hisse Bulunamadı' });
        }
        await share.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports=destroy;