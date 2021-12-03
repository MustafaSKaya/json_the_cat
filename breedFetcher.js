const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function(error, response, body) {
      const data = JSON.parse(body);
      if (error) {
        callback(error);
      } else if (data[0] === undefined) {
        return callback(error);
      } else {
        callback(error, data[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
