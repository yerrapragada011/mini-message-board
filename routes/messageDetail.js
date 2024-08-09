const express = require('express')
const router = express.Router()
const messageController = require('../controllers/messageController')

router.get('/:id', messageController.messageDetailGet)

module.exports = router
