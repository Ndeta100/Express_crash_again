const messages=require('./../models/messages')
//getting all messages
 function getMessages(req,res){
  res.json({
      data:messages
  })
}
//Getting a message with an id
function getMessage(req,res){
    const messageId=Number(req.params.id)
    const message=messages[messageId]
    if(!message){
        res.status(404).json({
            message:`Friend with id ${req.params.id} not found`
        })
    }else{
        res.status(200).json({
            data:{
                message
            }
        })
    }
}
function postMessages(req, res){
    if(!req.body.name ){
        return res.status(400).json({
            Error:'Please add a name '
        })
    }else{
        const message={
            name:req.body.name,
            id:messages.length
    }
    messages.push(message)
    res.status(202).json({
        data:{
            messages
        }
    })
}
}
module.exports={
    getMessage, getMessages, postMessages
}