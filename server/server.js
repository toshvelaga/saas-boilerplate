const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = 5002

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`)
})
