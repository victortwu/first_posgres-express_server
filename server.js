import express from 'express'
const app = express()
import cors from 'cors'
import pool from './db.js'

const PORT = 5000

app.use(cors())

app.use(express.json()) // <--- req.body




import country from './controllers/countriesController.js'
app.use('/countries', country)

import user from './controllers/userController.js'
app.use('/users', user)




app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}...`)
})
