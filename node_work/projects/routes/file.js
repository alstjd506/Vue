const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({dest:'D:/upload/'})

//한개면
router.post('/upload', upload.single('avatar'), (req, res) =>{
    console.log(req.file);
    console.log('파일크기:', req.file.size);
    console.log('파일명:', req.file.originalname);
    console.log('저장된 파일 명:',req.file.filename);
    console.log(req.body)
    res.send('ok')
})

//여러개이면
// router.post('/upload', upload.array('avatar'), (req, res) =>{
//     console.log(req.file);
//     console.log('파일크기:', req.files[0].size);
//     console.log('파일명:', req.files[0].originalname);
//     console.log('저장된 파일 명:',req.files[0].filename);
//     console.log(req.body)
//     res.send('ok')
// })


module.exports = router;