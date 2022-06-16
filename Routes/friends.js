const {getFriend, getFriends,postFriend}=require('./../controllers/friends')
const express=require('express')
const friendsRouer=express.Router()
friendsRouer.get('/',getFriends).get('/:id', getFriend).post('/',postFriend)

module.exports=friendsRouer