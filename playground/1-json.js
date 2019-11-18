const fs = require('fs')

const bufferFromJson = fs.readFileSync('1-json.json')
const dataString = bufferFromJson.toString()
const dataJSON = JSON.parse(dataString)  

console.log(dataJSON.title)