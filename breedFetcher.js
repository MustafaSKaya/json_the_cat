const request = require('request');

const arg = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {
  if (error) {
    throw error;
  }
  if (arg === undefined) {
    throw 'requested breed is not found';
  }
  if (arg) {
    const data = JSON.parse(body);
    console.log(data[0].description);
    console.log(typeof data);
  }
    
});