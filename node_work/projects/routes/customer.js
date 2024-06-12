const express = require('express');
const router = express.Router();
const query = require('../mysql/index.js');

router.get("/", (req,res)=> {
    query("customerList")
    .then(result => res.send(result))
})
router.post("/", (req,res)=> {
    console.log(req.body)
    query("customerInsert", req.body)
    .then(result => res.send(result))
})
router.put('/', (req,res)=> {
    //const id = req.params.id;
    query("customerUpdate", req.body.data)
    .then(result => res.send(result))
})
router.delete('/:id', async (req,res)=> {
    const id = req.params.id;
    let reuslt = await query("customerDelete", id)
    .then(result => res.send(result))
})

module.exports = router;