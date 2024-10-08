#! /usr/bin/env node

require('dotenv').config()

const { Client } = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS msgs (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  msg VARCHAR ( 255 ),
  author VARCHAR ( 255 ),
  added DATE
);

INSERT INTO msgs (msg, author, added) 
VALUES
  ('Hi there!', 'Amando', '2024-08-09'),
  ('Hello World!', 'Charles', '2024-08-09'),
  ('Hey how are you?', 'Damon', '2024-08-09');
`

async function main() {
  console.log('seeding...')
  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log('done')
}

main()
