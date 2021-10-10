import express from 'express'
import axios from 'axios'
const app = express()
import cors from 'cors'
import pool from './db.js'

const PORT = 5000

app.use(cors())

app.use(express.json()) // <--- req.body



// axios.get('https://restcountries.com/v3.1/all')
//   .then(res => {
//     console.log(JSON.stringify(res.data))
//   })


import user from './controllers/userController.js'
app.use('/users', user)




app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}...`)
})
