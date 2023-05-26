const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync('public')) {
      fs.mkdirSync('public');
    }
    if (!fs.existsSync('public/videos')) {
      fs.mkdirSync('public/videos');
    }

    cb(null, 'public/videos');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    console.log("Video file extension", ext);
    if (ext !== '.mkv' && ext !== '.mp4') {
      return cb(new Error('Only videos are allowed'));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 500 * 1024 * 1024, // Increase the file size limit to 50MB (adjust as needed)
    
  },
});

// get media
router.get('/all', mediaController.getAll);
router.post('/create', upload.fields([{ name: 'videos', maxCount: 5 }]), mediaController.postVideo);

module.exports = router;
