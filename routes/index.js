const express = require('express')
const router = express.Router()

const messages = [
  {
    id: 0,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    id: 1,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
]

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages })
})

module.exports = { router, messages }
