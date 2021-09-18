const fs = require('fs');
const fileStream = fs.createWriteStream('./venkatesh.txt')

for (let i = 0; i < 1000; i++) {
  fileStream.write(`Writable strems in nodejs ${i++}`)
}