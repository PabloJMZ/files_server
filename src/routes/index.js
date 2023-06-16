const express = require('express');
const router = express.Router();

const downloadFile = require('./download_file');
const uploadFile = require('./upload_file');
const storage = require('./storage');

router.use(downloadFile);
router.use(uploadFile);
router.use(storage);

module.exports = router;