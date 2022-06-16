
const friends=require('./../models/friends')
//Creating a friend
function postFriend(req,res){
    if(!req.body.name){
      return  res.status(400).json({
            message:'Resource not found'
        })
    }
    const newFriend={
        name:req.body.name,
        id:friends.length
    }
    friends.push(newFriend)
    res.json(newFriend)
}
//Getting friends
function getFriends(req,res){
    res.status(200).json({
        data:{
            friends
        }
    })
}
//Getting a friend
function getFriend(req,res){
    const friendId=req.params.id
    const newFriend=friends[friendId]
    if(friendId>friends.length){
        return res.status(400).json({
            Error:`Friend with id ${req.params.id} not found`
        })
    }else{
        res.status(200).json({
            data:newFriend
        })
    }
}

module.exports={
    getFriend, getFriends,postFriend
}