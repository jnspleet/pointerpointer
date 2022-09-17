// https://pointerpointer.com/images/710.jpg

const { v4 } = require('uuid')
const fs = require('fs');
const request = require('request');
let images = 1;


setInterval(() => {
    const download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
            images++;
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };

    download(`https://pointerpointer.com/images/${images}.jpg`, `./images/${images}.jpg`, function () {
        console.log('Downloaded A New Image! Images Downloaded: ' + images);
    });
}, 500);