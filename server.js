var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var youtube = require('./lib/js/youtubeAPI.js')
app.use(express.static('public'))

app.get('/search', youtube.search)

app.set('port', (process.env.PORT || 3000))
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
