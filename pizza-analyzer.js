// dependency
var request = require('request');

var toppingsURL = 'http://files.olo.com/pizzas.json';

var tallyToppings = function (toppingsList) {

  for (var i = 0; i < toppingsList.length; i++) {
    var toppings = sample[i].toppings;



















};

request(toppingsURL, function (error, res, body) {
    if (!error && res.statusCode ==200) {
      console.log(body);
    }
});
