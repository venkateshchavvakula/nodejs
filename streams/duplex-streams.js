const { PassThrough, Duplex } = require('stream')

const { createReadStream, createWriteStream } = require("fs");
const readStream = createReadStream("../README.md"); // read data from this file
const writeStream = createWriteStream("./duplex.txt"); // write data to this file

class Throttle extends Duplex {

    constructor(time) {
        super();
        this.delay = time;
    }

    _read() {

    }

    _write(chunk, encoding, callback) {
        this.push(chunk);
        setTimeout(callback, this.delay);
    }

    _final() {
        this.push(null)
    }
}

const tunnel = new PassThrough();
const throttle = new Throttle(1000); // This sets a delay of 1000 milliseconds, and the method within the Throttle class pushes the chunk.


let amount = 0;
tunnel.on("data", (chunk) => {
    amount += chunk.length;
    console.log("bytes:", amount);
});

readStream.pipe(throttle).pipe(tunnel).pipe(writeStream);
