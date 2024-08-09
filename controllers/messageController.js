const db = require('../db/queries')

exports.messageList = async (req, res) => {
  const messages = await db.getAllMessages()
  res.render('index', {
    title: 'Mini Messageboard',
    messages: messages
  })
}

exports.newMessageGet = async (req, res) => {
  res.render('form', { title: 'New Message' })
}

exports.newMessagePost = async (req, res) => {
  const { msg, author } = req.body
  const added = new Date()
  await db.addMessage(msg, author, added)
  res.redirect('/')
}

exports.messageDetailGet = async (req, res) => {
  const messageId = parseInt(req.params.id, 10)
  const message = await db.getMessageDetail(messageId)

  if (message) {
    res.render('messageDetail', { title: 'Message Detail', message })
  } else {
    res.status(404).send('Message not found')
  }
}
