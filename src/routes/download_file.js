const express = require('express');
const router = express.Router();

const path = require('path');
const fs = require('fs');

router.get('/download',(req, res, next) => {
    try {
        if(!req.query.path || /^\s*$/.test(req.query.path)){
            const error = new Error('No enviaste un nombre')
            error.status = 400;
            return next(error);
        }
        const filePath = path.join(__dirname, '..', 'uploads', req.query.path);
        if(!fs.existsSync(filePath)){
            const error = new Error('Este archivo no existe en el servidor')
            error.status = 404;
            return next(error);
        }
        return res.status(200).sendFile(filePath)
    } catch (error) {
        next(error);
    }
})

module.exports = router;