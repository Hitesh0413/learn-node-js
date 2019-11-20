const request = require('request')
const url = 'https://api.darksky.net/forecast/904bfaa4c05874446de59685259b36c4/8.613939,77.209023'

request({url: url, json : true},(error, response)=>{ 
    console.log(response.body.currently)
})