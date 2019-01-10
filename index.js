var express = require('express');
var app = express();
var fs = require('fs');

function readModuleFile(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}



//SETTINGS
var S_PORT=3000;
app.use(express.static('public'))

//routes

// app.get('*', function (req, res) {
// });

app.get('/', function (req, res) {
  
  readModuleFile('./views/default.html', function (err, words) {
    console.log("serving default");

    res.send(words);
});
});



app.listen(S_PORT, function () {
  console.log('Example app listening on port '+S_PORT+'!');
});