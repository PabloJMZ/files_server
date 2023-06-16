const express = require('express');
const router = express.Router();

const files = require('../middlewares/files');

router.post('/upload',
    files.single('file'),
    (req, res, next) => {
        try {
            res.send(`Archivo ${req.file.originalname} Guardado en el servidor`);
        } catch (error) {
            next(error);
        }
})

module.exports = router;