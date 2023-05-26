

const express = require('express')
const mediaController = require('../controllers/mediaController')
const multer = require('multer');
const fs = require('fs')
const path = require('path')

const storage = multer.diskStorage({
    destination : function(req,file,cb){
         if(fs.existsSync('File')){
            fs.mkdirSync('File')
         }
         if(fs.existsSync('File/videos')){
            fs.mkdirSync('File/videos')
         }

         cb(null,'File/videos');
    },
    filename : function(req,file,cb){
        cb(null, Date.now() + file.originalname)
    }
})

const router = express.Router();

const upload = multer({
    storage : storage
})


// get media 

router.get('/all', mediaController.getAll)

router.post('/create',mediaController.postVideo)






module.exports = router;
