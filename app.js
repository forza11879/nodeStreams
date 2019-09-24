const fs = require('fs');
let data = '';

// Create a readable stream
let readableStream = fs.createReadStream('text.txt', 'utf8');

// Handle stream events --> data, end,
readableStream.on('data', function (chunk) {
  data += chunk;
});

readableStream.on('end', function () {
  dataResult = data.split('\r\n')
    .map(item => item.split(','))
    .map(item => ({
      name: item[0].trim(),
      numberOfPurchases: item[1].trim()
    }))
    .filter(item => item.numberOfPurchases > 2)
    .map(item => item.name)
  dataResult.forEach(item => console.log('each:', item))
});