const express=require('express')
const app=express()
const port=process.env.PORT||5000
const friends=[
    {
        id:0,
        name:"ndeta"
    }
]
app.get('/', (req,res)=>{
    res.json(friends)
})
app.use((req,res, next)=>{
    const start=Date.now()
    next()
    const delta=Date.now()-start
    console.log(`This is middleware ${req.method}  ${req.url}  took ${delta} ms`)
})
app.use(express.json())
app.get('/message', (req,res)=>{
    res.send(friends)
})
app.get('/message/:id',(req,res)=>{
    const friendId=Number(req.params.id)
    const friend=friends[friendId]
    if(!friend){
        res.status(404).json({
            message:'Friend does not exist'
        })
    }else{
        res.status(200).json(friend)
    }
})
app.post('/message',(req,res)=>{
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
})





app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})