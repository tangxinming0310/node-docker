const express = require('express')
const app = express()

app.get('/', function (req, res) {
  req.send('hello world')
})

app.listen(8080, () => {
  console.log('server is running')
})