const express = require('express');
const router = express.Router();
const query = require('../mysql/index.js');
const multer = require('multer');
const upload = multer({dest:'D:/upload/'})

// board = [
//     {
//         "no" : 1,
//         "title" : "json title",
//         "name" : "hong",
//         "content" : "content test"
//     },
//     {
//         "no" : 2,
//         "title" : "json title",
//         "name" : "hong",
//         "content" : "content test2"
//     }
// ];
// router.get('/',(req,res)=>{
//     console.log(new Date(req.requestTime).toLocaleString());
//     res.send(board);
// })
// router.get('/:no',(req,res)=>{
//     console.log(req.params.no);
//     let result = board.find(ele => ele.no == req.params.no);
//     res.send(result);
// })
// router.post('/', (req,res)=>{
//     console.log(req.body);
//     board.push(req.body);
//     res.send(board);
// })
// router.put('/:no',(req,res)=> {
//     const no = req.params.no;
//     board = board.map(ele => ele.no == no ? {...ele, ...req.body } : ele)
//     res.send(board);
// })
// router.delete('/:no', (req,res) => {
//     const no = req.params.no;
//     board = board.filter(ele => ele.no != no);
//     res.send(board);
// })
router.get("/", (req,res)=> {
    let page = Number(req.query.page)
    page = (page-1)*10
    query("boardList" , page)
    .then(result => res.send(result))
})
router.get("/:no", (req,res)=> {
    const no = req.params.no;
    query("boardGet", no)
    .then(result => res.send(result))
})
router.post("/", upload.single("avatar"), (req,res)=> {
    //첨부파일이 있으면
    let data = {...req.body};
    if(file != null){
        data.filename = req.file.filename
        data.uploadfilename = req.file.originalname
    }else{
        query("boardInsert", req.body)
        .then(result => res.send(result))
    }
})
router.put('/:no', (req,res)=> {
    const no = req.params.no;
    query("boardUpdate", [req.body, no])
    .then(result => res.send(result))
})
router.delete('/:no', async (req,res)=> {
    const no = req.params.no;
    let reuslt = await query("boardDelete", no)
    .then(result => res.send(result))
})


module.exports = router;