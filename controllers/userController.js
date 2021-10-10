import express from 'express'
import pool from '../db.js'
const user = express.Router()



// create
user.post('/new', async(req, res) => {
  try {
    console.log('trying to post..')
    const { username, password } = req.body
    const newUser = await pool.query(
      'INSERT INTO users (username, password) VALUES($1, $2)',
      [username, password]
    )
    res.status(201).json(newUser)
  }
  catch (err) {
    console.error(err.message)
  }

})

// get all users
user.get('/', async(req, res) => {
  try {
    console.log('Trying to get users...')
    const allUsers = await pool.query(
      'SELECT * FROM users'
    )
    res.status(200).json(allUsers.rows)
  }
  catch (err) {
    console.error(err.message)
  }
})

// get specified user
user.get('/:id', async(req, res) => {
  try {
    console.log('Trying to ONE user...')
    const { id } = req.params
    const oneUser = await pool.query(
      'SELECT * FROM users WHERE user_id = $1', [id]
    )
    res.status(200).json(oneUser.rows[0])
  }
  catch (err) {
    console.error(err.message)
  }
})

// update
user.put('/:id', async(req, res) => {
  try {
    console.log('Updating user ....')
    const { id } = req.params
    const { username, password } = req.body
    const updatedUser = await pool.query(
      "UPDATE users SET username = COALESCE(NULLIF(($1),''), username), password = COALESCE(NULLIF(($2),''), password) WHERE user_id = $3",
      [username, password, id]
    )
    res.status(200).json('User was updated')
  }
  catch(err) {
    console.error(err.message)
  }
})


// delete
user.delete('/:id', async(req, res) => {
  try {
    console.log('Deleting...')
    const { id } = req.params
    const deleteUser = await pool.query(
      'DELETE FROM users WHERE user_id = $1', [id]
    )
    res.status(200).json('User was deleted')
  }
  catch(err) {
    console.error(error.message)
  }
})


export default user
