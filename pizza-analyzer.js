// dependency
var request = require('request');

// URL for toppings
var toppingsURL = 'http://files.olo.com/pizzas.json';

var pizzaAnalyzer = function () {
  this.orders = {};
  this.output = [];
}

pizzaAnalyzer.prototype.tallyToppings = function (toppingsList) {
  for (var i = 0; i < toppingsList.length; i++) {
    var toppings = toppingsList[i].toppings;
    for (var j = 0; j < toppings.length; j++) {
      var currentTopping = toppings[j];
      if (this.orders[currentTopping]) {
        this.orders[currentTopping]++;
      } else {
        this.orders[currentTopping] = 1;
      }
    }    
  }
}

pizzaAnalyzer.prototype.topTwenty = function () {
  var orders = this.orders;
  toppingsSorted = Object.keys(orders).sort(function(a,b){return orders[b]-orders[a]});
  for (var i = 0; i < toppingsSorted.length; i++) {
    var currentTopping = toppingsSorted[i];
    this.output.push({[currentTopping]: this.orders[currentTopping]})
  }
  return this.output;
}

// Our "Main" file that runs the program
request(toppingsURL, function (error, res, pizzaData) {
    if (!error && res.statusCode == 200) {
      var parsedPizzaData = JSON.parse(pizzaData);
      var currentPizzaAnalzyer = new pizzaAnalyzer();
      currentPizzaAnalzyer.tallyToppings(parsedPizzaData);
      console.log(currentPizzaAnalzyer.topTwenty());
    }
});
