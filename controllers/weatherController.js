import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const weather = express.Router()

const accuUrl = process.env.ACCUWEATHER_URL
const accuApiKey = process.env.ACCUWEATHER_APIKEY
const latLong = [35.6762,139.6503]
const geoString = '/locations/v1/cities/geoposition/search'
const weatherString = '/currentconditions/v1/'

// get geoposition AND weather in one call

weather.get('/', async(req, res)=> { //needs params
    // needs to check for params
    try {
        axios.get(`${accuUrl}${geoString}?apikey=${accuApiKey}&q=${latLong[0]},${latLong[1]}`)
        .then(response=> {
            //console.log('The Response: ',response)
            return response.data
        })
        .then(data=> {
            axios.get(`${accuUrl}${weatherString}${data.Key}?apikey=${accuApiKey}`)
            .then(response=> {
                return response.data
            })
            .then(data=> {
                res.status(200).json(data)
            })
            .catch(err=> {
                console.error(err.message)
            })
        })
        .catch(err=> {
            console.error(err.message)
        })
    } catch(error) {
        console.error(error.message)
    }
})

export default weather