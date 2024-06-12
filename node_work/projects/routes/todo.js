const express = require('express');
const router = express.Router();
const query = require('../mysql/index.js');


router.get("/", (req,res)=> {
    query("todoList")
    .then(result => res.send(result))
})
router.get("/:no", (req,res)=> {
    const no = req.params.no;
    query("todoGet", no)
    .then(result => res.send(result))
})
router.post("/", (req,res)=> {
    console.log(req.body)
    query("todoInsert", req.body)
    .then(result => res.send(result))
})
router.put('/:no', (req,res)=> {
    const no = req.params.no;
    query("todoUpdate", req.body)
    .then(result => res.send(result))
})
router.delete('/:no', async (req,res)=> {
    const no = req.params.id;
    let reuslt = await query("todoDelete", no)
    .then(result => res.send(result))
})

module.exports = router;