const getAllUsers = async (req, res) => {
    try {
        const users = await models.user.findAll();
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports=getAllUsers;