const fs = require('fs');

const fileStream = fs.createReadStream('./venkatesh.txt');

fileStream.on('data', (data) => {
    console.log(`read data:`, data.toString())
}).on('end', () => {
    console.log('Reading data completed!')
})