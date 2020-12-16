const express = require('express')
const multer = require('multer');
const imgModel = require('../models/imageSchema');
const router = express.Router();




var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/gif' || file.mimetype == 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);

    }

}
const upload = multer({ storage: storage, fileFilter: fileFilter });

//Upload route
router.post('/upload', upload.array('images',10), async (req, res, next) => {
    
for (let i = 0; i < req.files.length; i++) {
   
    
        var obj = {
            
            img: {
                data: req.files[i].filename,
                contentType: 'image/png' || 'image/jpeg' || 'image/gif'
            },
            path: req.files[i].path
        }

        await imgModel.create(obj)
    }
    try {
        await res.send(req.files);
        // return res.json
        // //({
        // //     message: 'Files uploded successfully '

        // // });
    } catch (error) {

        console.error(error);
    }
});


// router.get('/upload/:theImageName', function(req, res){
//     console.log(req.params.theImageName); //returns the imageOfApet.png
//     var theName = req.params.theImageName; //imageOfApet.png
//     res.sendFile( "c:/Users/kammoun/Desktop/rest-api-playlist/ "+ "/upload/" + theName); //Sending the user the file
//  })

module.exports = router;