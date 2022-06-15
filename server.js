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
app.get('/message', (req,res)=>{
    res.send('<h1>Hi there!</h1>')
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
    res.send('<ul>I had php lol !</ul>')
})





app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})