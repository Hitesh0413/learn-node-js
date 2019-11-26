const path = require('path')
const express = require('express')
const publicPath = path.join(__dirname,'../public')

app = express()

app.use(express.static(publicPath))
app.get('',(req,res)=> {
    res.send()
})

app.get('/weather',(req,res)=> {
    res.send('About cryonicx world')
})

app.listen('3000',()=>{
    console.log('server started at port 3000')
})