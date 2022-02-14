const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/endpoint', (req, res) => {
  const today = new Date()
  const response = {data: `IT is working!!!! -> ${today.toDateString()}`}
  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})