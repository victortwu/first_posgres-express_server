import express from 'express'
const app = express()
import cors from 'cors'
import pool from './db.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = 4000

app.use(cors())

app.use(express.json()) // <--- req.body




import country from './controllers/countriesController.js'
app.use('/countries', country)

import user from './controllers/userController.js'
app.use('/users', user)

import weather from './controllers/weatherController.js'
app.use('/weather', weather)

import weatherMap from './controllers/weatherMapApiController.js'
app.use('/weatherMap', weatherMap)




app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}...`)
  
})
