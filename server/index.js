const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
  res.status(200).send({ message: 'we are good here' })
  console.log('responding here')
})

app.listen(3001, () => console.log('server running'))
