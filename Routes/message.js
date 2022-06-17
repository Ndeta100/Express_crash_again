const {getMessage,getMessages,postMessages}=require('./../controllers/messages')
const express=require('express')
const messageRouter=express.Router()
//Routing the controller
messageRouter.get('/:id',getMessage).get('/',getMessages).post('/', postMessages)
module.exports=messageRouter