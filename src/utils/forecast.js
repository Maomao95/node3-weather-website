const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=d925e4ad6e73473bf377acb3cde54e76&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        `It's ${response.body.current.temperature} degrees today`
      );
    }
  });
};
module.exports = forecast;
