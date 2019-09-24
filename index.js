const fs = require('fs');
let data = '';

// Create a readable stream
let readableStream = fs.createReadStream('pic.bmp', 'utf8');

// Handle stream events --> data, end,
readableStream.on('data', function (chunk) {
  // data += chunk;
  console.log('chunk', chunk)
});

// readableStream.on('end', function () {


//   data.forEach(item => console.log('each:', item))
// });