const pool = require('../config/db');

const User = {
    getAll: async () => {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    },
    findById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    },
    create: async ({ name, email, age }) => {
        const query = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
        const [result] = await pool.query(query, [name, email, age]);
        return result.insertId;
    },
    update: async (id, { name, email, age }) => {
        const query = 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?';
        const [result] = await pool.query(query, [name, email, age, id]);
        return result.affectedRows;
    },
    delete: async (id) => {
        const query = 'DELETE FROM users WHERE id = ?';
        const [result] = await pool.query(query, [id]);
        return result.affectedRows;
    }
};

module.exports = User;
