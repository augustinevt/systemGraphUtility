"use strict";

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var testAdjacencyList = {
  root: {
    id: 'root',
    edges: ["B"]
  },
  B: {
    id: 'B',
    edges: ["C"]
  },
  C: {
    id: 'C',
    edges: ["D"]
  },
  D: {
    id: 'D',
    edges: []
  }
};
var desiredArrayForm = {
  nodes: [{
    id: 'A',
    edges: ["B"]
  }, {
    id: 'B',
    edges: ["C"]
  }, {
    id: 'C',
    edges: ["D"]
  }, {
    id: 'D',
    edges: ["A"]
  }],
  links: [{
    source: 'A',
    target: 'B'
  }, {
    source: 'B',
    target: 'C'
  }, {
    source: 'C',
    target: 'D'
  }, {
    source: 'D',
    target: 'A'
  }]
};
test('converts to two arrays', function () {
  var graph = new _["default"](testAdjacencyList);
  var arrayForm = graph.convertToArrays();
  expect(arrayForm).toEqual(desiredArrayForm);
});