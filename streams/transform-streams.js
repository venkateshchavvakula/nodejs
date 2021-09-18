const fs = require('fs');
const { Transform } = require('stream');

const fileStream = fs.createReadStream('./venkatesh.txt');
const transformedData = fs.createWriteStream("./transformedData.txt");

const stringupperCase = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
})

fileStream
    .pipe(stringupperCase)
    .on('error', function (e) { handleError(e) })
    .pipe(transformedData)
    .on('error', function (e) { handleError(e) });

function handleError(error) {
    console.error(`Transform stream failed:${error}`)
}
