const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
require('dotenv/config')

const unsplashJs = require('unsplash-js')

const app = express()
app.use(express.json())
app.use(cors())

global.fetch = fetch

URL = require('url').URL
global.fetch = fetch

const unsplash = unsplashJs.createApi({
  accessKey: process.env.UNSPLASH_API_KEY,
  fetch: fetch,
  headers: { 'X-Custom-Header': 'foo' },
})

app.get('/api/:search', (req, res) => {
  const { search } = req.params

  unsplash.search
    .getCollections({
      query: search,
      page: 1,
      perPage: 10,
    })
    .then(data => {
      res.status(200).send(data.response.results)
    })
    .catch(err => console.log(err))
})

app.listen(3001, () => console.log('server running'))
