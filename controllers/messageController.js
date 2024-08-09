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
  const { msg, author, added } = req.body
  await db.addMessage(msg, author, added)
  res.redirect('/')
}
