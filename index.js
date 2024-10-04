const express = require('express')
const app = express()
const path = require('path')
const port = 4000
app.use(express.static('./public'))

app.get('/',(req,res)=>{
   res.sendFile('index.html',{root:'.'})
})

app.listen(port,()=>{
    console.log(`Server is running on ${port} `)
})

