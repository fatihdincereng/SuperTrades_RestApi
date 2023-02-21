async function list(req, res) {
    try {
        const shares = await models.share.findAll();
        res.json(shares);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports=list;
