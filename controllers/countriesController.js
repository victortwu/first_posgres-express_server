import express from 'express'

const country = express.Router()

import axios from 'axios'



// get all data from RESTcountries api
country.get('/all', async(req, res) => {
  try {
    console.log('trying country names')
    axios.get('https://restcountries.com/v3.1/all')
        .then(response => {

          return response.data
        })
        .then(data => {
            const result = data.map(country => {
              return country
            })
            res.status(200).json(result)
        })
  }
  catch(err) {
    console.error(err.message)
  }
})



// get a list of country names
country.get('/names', async(req, res) => {
  try {
    console.log('trying country names')
    axios.get('https://restcountries.com/v3.1/all')
        .then(response => {

          return response.data
        })
        .then(data => {
            const result = data.map(country => {
              return country.name.common
            })
            res.status(200).json(result)
        })
  }
  catch(err) {
    console.error(err.message)
  }
})


// get ONE country by name
country.get('/:name', async(req, res) => {
  try {
    const { name } = req.params
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => {

          return response.data
        })
        .then(data => {
            const result = data.map(country => {
              return country
            })
            res.status(200).json(result)
        })
  }
  catch(err) {
    console.error(err.message)
  }
})


export default country
