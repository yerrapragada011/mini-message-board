const express = require('express')
const router = express.Router()
const { messages } = require('./index')

let lastId = messages.length > 0 ? messages[messages.length - 1].id : 0

router.get('/', (req, res) => {
  res.render('form', { title: 'New Message' })
})

router.post('/', (req, res) => {
  lastId += 1
  messages.push({
    id: lastId,
    text: req.body.messageText,
    user: req.body.authorsName,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router
