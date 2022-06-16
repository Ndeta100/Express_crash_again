const express=require('express')
const app=express()
const {getMessage,getMessages,postMessages}=require('./controllers/messages')
const {getFriend, getFriends,postFriend}=require('./controllers/friends')
//Middlewares
app.use((req,res, next)=>{
    const start=Date.now()
    next()
    const delta=Date.now()-start
    console.log(`This is middleware ${req.method}  ${req.url}  took ${delta} ms`)
})
app.use(express.json())
//Rountes for messages
app.get('/', getMessages)
app.get('/message/:id',getMessage)
app.get('/message',getMessages)
app.post('/message', postMessages)

//Route for friends
app.get('/friend',getFriends)
app.get('/friend/:id', getFriend)
app.post('/friend', postFriend)



//Server listening
const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})