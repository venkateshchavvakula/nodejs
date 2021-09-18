const fs = require('fs');
const { pipeline, Transform } = require("stream");

const streamA = fs.createReadStream('venkatesh.txt');
const streamB = fs.createReadStream('error.txt');

pipeline(
    streamA,
    streamB,
    (error) => {
        if (error) {
            console.error("An error occured in pipeline.", error);
        } else {
            console.log("Pipeline execcution successful");
        }
    }
)
