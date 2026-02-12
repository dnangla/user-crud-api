const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Check if Joi error
    if (err.isJoi) {
        return res.status(400).json({ error: err.details[0].message });
    }

    // Check for MySQL specific errors
    if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Duplicate entry' });
    }

    res.status(500).json({
        message: 'Internal Server Error',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
};

module.exports = errorHandler;
