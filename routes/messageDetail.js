const express = require('express')
const router = express.Router()
const { messages } = require('./index')

router.get('/:id', (req, res) => {
  const messageId = parseInt(req.params.id, 10)
  const message = messages.find((message) => message.id === messageId)

  if (message) {
    res.render('messageDetail', { title: 'Message Detail', message })
  } else {
    res.status(404).send('Message not found')
  }
})

module.exports = router
