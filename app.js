const express = require('express')
const app = express()
const path = require('node:path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
]

app.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages })
})

const PORT = 3000
app.listen(PORT, () => console.log(`listening on port ${PORT}!`))
