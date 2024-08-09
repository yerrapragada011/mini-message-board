const pool = require('./pool')

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM msgs')
  return rows
}

async function addMessage(msg, author, added) {
  await pool.query(
    'INSERT INTO msgs (msg, author, added) VALUES ($1, $2, $3)',
    [msg, author, added]
  )
}

module.exports = {
  getAllMessages,
  addMessage
}
