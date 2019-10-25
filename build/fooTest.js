"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var graph = new _index["default"]();
graph.createTree({
  numOfNodes: 14,
  numOfChildren: 3
});
graph.modifyConnectivity(0.9);
graph.print();