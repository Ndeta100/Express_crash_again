const express=require('express')
const app=express()
const messageRouter=require('./Routes/message')
const friendsRouer=require('./Routes/friends')
//Middlewares
app.use((req,res, next)=>{
    const start=Date.now()
    next()
    const delta=Date.now()-start
    console.log(`This is middleware ${req.method}  ${req.url}  took ${delta} ms`)
})
app.use(express.json())
//Routes for messages
app.use('/message' ,messageRouter)
//Route for friends
app.use('/friend', friendsRouer)
//Server listening
const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})