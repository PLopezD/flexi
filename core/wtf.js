var express = require('express');
var Multer = require('multer');
var fs = require('fs')
app = express()

// Handles the multipart/form-data
// Adds a .file key to the request object
// the 'storage' key saves the image temporarily for in memory
// You can also pass a file path on your server and it will save the image there
var multer = Multer({
  storage: Multer.MemoryStorage,
  fileSize: 5 * 1024 * 1024,
  path: './upload'
});

// the multer accessing the key 'image', as defined in the `FormData` object on the front end
// Passing the uploadToGcs function as middleware to handle the uploading of request.file

var ImgUpload = {};

ImgUpload.uploadToGcs = (req, res, next) => {
  if(!req.file) return next();

  // Can optionally add a path to the gcsname below by concatenating it before the filename
  var stream = fs.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });

  stream.on('error', (err) => {
    next(err);
  });

  stream.on('finish', (res) => {
    next(res);
  });

  stream.end(req.file.buffer);
}

app.post('/upload', multer.single('image'), ImgUpload.uploadToGcs, function(request, response, next) {
  var data = request.body;
  response.send(data);
})

var server = app.listen(5000, function () {
  console.log('Listening on port ' + server.address().port)
});

