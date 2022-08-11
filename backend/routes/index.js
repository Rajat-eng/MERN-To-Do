const express=require('express');
const router=express.Router();

console.log('router loaded')

router.use('/api',require('./todolist'));

module.exports=router;