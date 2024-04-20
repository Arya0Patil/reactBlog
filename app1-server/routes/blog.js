const express = require('express')
const db = require('../db');
const { createResult } = require('../utils');
const utils = require('../utils')
const router = express.Router()

router.get('/getblogs', (request, response) => {
    const statement = `select title, contents from blogs;`
    db.pool.query(statement, (error, categories) => {
      response.send(utils.createResult(error, categories))
    })
  })

router.post('/addblog',(req,res)=>{
    const {title,contents,user_id,category_id}= req.body;

    const statement = 'insert into blogs (title,contents,user_id,category_id) values (?,?,?,?);'

    db.pool.execute(statement,[title,contents,user_id,category_id],(error,data)=>{
        res.send(createResult(error,data))
    })

})

router.post('/search',(req,res)=>{
    const {search}= req.body;
    const searchValue = `%${search}%`;
    const statement = "select * from blogs where title like ?;"
    console.log(statement)
    db.pool.execute(statement,[searchValue],(error,data)=>{
        res.send(createResult(error,data))
        console.log(statement)
    })

})

module.exports = router