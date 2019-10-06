"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var graph = new _index["default"]();
var bread = graph.addNode({
  text: 'bread'
});
var cheese = graph.addNode({
  text: 'cheese'
});
var meat = graph.addNode({
  text: 'meat'
});
var hummus = graph.addNode({
  text: 'hummus'
});
var olive = graph.addNode({
  text: 'olive'
});
var link1 = graph.addEdge(bread, cheese);
var link2 = graph.addEdge(bread, meat);
var link3 = graph.addEdge(bread, hummus);
var link4 = graph.addEdge(hummus, olive);
var link5 = graph.addEdge(meat, olive);
console.log(graph.searchByAttribute('text', 'bread'));