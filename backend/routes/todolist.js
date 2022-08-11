const express=require('express');
const router=express.Router();
const todoItemsModel=require('../models/todoitem');

router.post('/item',async (req,res)=>{
    try{
        const newItem=await todoItemsModel.create({
            item:req.body.item
        })
        //const saveItem=await newItem.save();
        return res.status(200).json(newItem);
    }catch(err){
        res.json(err);
    }
})

router.get('/items', async (req, res)=>{
    try{
      const allTodoItems = await todoItemsModel.find({});
      return res.status(200).json(allTodoItems)
    }catch(err){
      return res.json(err);
    }
})

router.put('/item/:id', async (req, res)=>{
    try{
      //find the item by its id and update it
      const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
      res.status(200).json(updateItem);
    }catch(err){
      res.json(err);
    }
})


router.delete('/item/:id', async (req, res)=>{
    try{
      //find the item by its id and delete it
      const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
      return res.status(200).json('Item Deleted');
    }catch(err){
      res.json(err);
    }
})





module.exports=router;