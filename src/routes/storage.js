const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

uploadsPath = path.join(__dirname, '..', 'uploads');

router.get('/storage',(req, res, next) => {
    try {
        const dirContent = fs.readdirSync(uploadsPath);
        res.json({
            dir: "uploads/",
            data: dirContent
        })
    } catch (error) {
        next(error);
    }
})

module.exports = router;