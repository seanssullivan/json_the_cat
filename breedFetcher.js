// breedFetcher.js

const request = require('request');

const breedName = process.argv[2];
const query = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(query, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  // console.log(typeof body);
  if (error && error.code === 'ENOTFOUND') {
    console.log("Invalid url");
  } if (response !== 200) {
    console.log(`An error occurred: ${body.status} - ${body.message}`);
  } else if (!body) {
    console.log("We could not find any cat breeds by that name");
  } else {
    const data = JSON.parse(body);
    const description = data[0]["description"];
    console.log(description);
  }
  // console.log(data);
  // console.log(typeof data);
});
