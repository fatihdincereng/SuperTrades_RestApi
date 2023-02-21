const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await models.user.findOne({
            where: { id },
        });
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send('Belirtilen kimliğe sahip kullanıcı mevcut değil');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports=getUserById;