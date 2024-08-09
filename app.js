const express = require('express')
const app = express()
const path = require('node:path')

const indexRouter = require('./routes/index')
const newRouter = require('./routes/new')
const messageDetailRouter = require('./routes/messageDetail')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)
app.use('/new', newRouter)
app.use('/messageDetail', messageDetailRouter)

const PORT = 3000
app.listen(PORT, '0.0.0.0', () => console.log(`listening on port ${PORT}!`))
