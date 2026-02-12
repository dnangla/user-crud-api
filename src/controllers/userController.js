const User = require('../models/userModel');
const { validateUser } = require('../utils/validation');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.getAll();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

const createUser = async (req, res, next) => {
    try {
        const { error, value } = validateUser(req.body);
        if (error) {
            error.isJoi = true; // Mark as Joi error for handler
            throw error;
        }

        const insertId = await User.create(value);
        res.status(201).json({ id: insertId, ...value });
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { error, value } = validateUser(req.body);
        if (error) {
            error.isJoi = true;
            throw error;
        }

        const affectedRows = await User.update(req.params.id, value);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const affectedRows = await User.delete(req.params.id);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
