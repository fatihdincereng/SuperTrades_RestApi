const createUser = async (req, res) => {
    try {
        const user = await models.user.create(req.body);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports=createUser;