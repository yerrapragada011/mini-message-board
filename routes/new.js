const express = require('express')
const router = express.Router()
const { messages } = require('./index')

router.get('/', (req, res) => {
  res.render('form', { title: 'New Message' })
})

router.post('/', (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.authorsName,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router
