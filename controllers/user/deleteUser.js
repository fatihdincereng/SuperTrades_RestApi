const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await models.user.destroy({
            where: { id },
        });
        if (deleted) {
            return res.status(204).send('Kullanıcı Silindi');
        }
        throw new Error('Kullanıcı Bulunamadı');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports=deleteUser;