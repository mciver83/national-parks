const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const NPC = require('./controllers/NationaParks')

const app = express()
const { APP_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
  console.log('db is connected')
  app.set('db', db)
}).catch(err => {
  console.error('there was an error connecting to db', err)
})

app.use(bodyParser.json())

app.get('/api/national_parks', NPC.read)
app.post('/api/national_parks', NPC.create)
app.put('/api/national_parks/:id', NPC.update)
app.delete('/api/national_parks/:id', NPC.delete)
app.get('/api/national_parks/search', NPC.getByName)

app.listen(APP_PORT, () => {
  console.log('listening on port', APP_PORT)
})