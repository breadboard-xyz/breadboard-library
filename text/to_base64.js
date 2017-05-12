/*
@title To Base64
@input
{
  "content-type" : "text/plain",
  "type" : "buffer",
  "example" : "I am plain text!"
}
@output
{
  "content-type" : "text/plain"
}
@pragma editor replace
*/

var Buffer = require('buffer');

module.exports = function(req, res, next) {
  var buf = Buffer.transcode(req.body, 'utf8', 'base64')

  res.send(buf);
};