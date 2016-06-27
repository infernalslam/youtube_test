var Youtube = require('youtube-node')
var youTube = new Youtube()

exports.search = function (req, res, next) {
  var keyword = req.query.keyword
  youTube.setKey('AIzaSyDvwXUsN2hDGHCvrUeclxFFffgGLlGv8OE')

  youTube.search(keyword, 20, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      res.send(JSON.stringify(result, null, 20))
    }
  })
}
