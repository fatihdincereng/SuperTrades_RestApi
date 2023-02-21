const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await models.user.update(req.body, {
            where: { id },
        });
        if (updated) {
            const updatedUser = await models.user.findOne({ where: { id } });
            return res.status(200).json({ user: updatedUser });
        }
        throw new Error('Portfolio Bulunamadı');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports=updateUser;