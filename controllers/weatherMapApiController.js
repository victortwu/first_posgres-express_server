import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const weatherMap = express.Router()


const baseUrl = process.env.WEATHERMAP_URL
const weatherMapApi = process.env.WEATHERMAP_API

weatherMap.get('/:lat/:long', async(req, res)=> {
   
    try {
        axios.get(`${baseUrl}lat=${req.params.lat}&lon=${req.params.long}&units=imperial&appid=${weatherMapApi}`)
        .then(res=> {
            return res.data
        })
        .then(data=> {
            res.status(200).json(data)
        })
        .catch(err=> {console.error(err.message)})
    } catch (error) {
        console.error(error.message)
    }
})

export default weatherMap