// breedFetcher.js

const request = require('request');

const breedName = process.argv[3];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);
  // console.log(typeof body);

  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  const description = data[0].description;
  console.log(description);
});
