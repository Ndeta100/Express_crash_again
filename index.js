const express=require('express')
const app=express()
const port=process.env.PORT||5000

app.get('/', (req,res)=>{
    res.send('Hello Moumeni')
})

app.get('/message', (req,res)=>{
    res.send('<h1>Hi there!</h1>')
})


app.post('/message',(req,res)=>{
    res.send('<ul>I had php lol !</ul>')
})





app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})