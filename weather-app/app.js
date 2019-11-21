const geocode = require('./geocode')
const forecast = require('./forecast')

const location = process.argv[2]
if(!location)
    return console.log('Please provide the location')

geocode(location, (error,{longitude, latitude}) =>{
    if(error)
        return console.log(error)
    
    forecast(longitude, latitude, location, (error, {temp, prob}) => {
        if(error)
            return console.log(error)
        
        console.log('The tempreture at '+location+' is '+temp+' degree Celcius  and the is '+prob+'% probability of rain ')    
    })
})

