"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Graph =
/*#__PURE__*/
function () {
  function Graph() {
    _classCallCheck(this, Graph);

    this.adjacencyList = {};
    this.root = null;
  }

  _createClass(Graph, [{
    key: "addNode",
    value: function addNode(node) {
      var id = (0, _uuid["default"])();
      if (!this.root) this.root = id;
      this.adjacencyList[id] = _objectSpread({}, node, {
        id: id,
        edges: []
      });
      return id;
    }
  }, {
    key: "addEdge",
    value: function addEdge(from, to) {
      var origin = this.adjacencyList[from];
      var destination = this.adjacencyList[to];
      var isDuplicate = false;
      origin.edges.forEach(function (edge) {
        if (edge === to) isDuplicate = true;
      });

      if (!isDuplicate) {
        origin.edges.push(destination.id);
        destination.edges.push(origin.id);
      }
    }
  }, {
    key: "removeEdge",
    value: function removeEdge(from, to) {
      var origin = this.adjacencyList[from];
      var destination = this.adjacencyList[to];
      origin.edges = origin.edges.filter(function (item) {
        return destination.id === item;
      });
      destination.edges = destination.edges.filter(function (item) {
        return origin.id === item;
      });
    }
  }, {
    key: "removeNode",
    value: function removeNode(id) {
      var _this = this;

      var node = this.adjacencyList[id];
      node.edges.forEach(function (edgeId) {
        return _this.removeEdge(id, edgeId);
      });
      delete this.adjacencyList[id];
      return node;
    }
  }, {
    key: "searchByAttribute",
    value: function searchByAttribute(key, val) {
      var _this2 = this;

      var queue = [this.adjacencyList[this.root]];
      var visited = [];
      var results = [];

      var addToQueue = function addToQueue(id) {
        var wasVisited = false;
        var alreadyQueued = false;
        visited.forEach(function (visitedId) {
          if (id === visitedId) wasVisited = true;
        });
        queue.forEach(function (queueId) {
          if (id === queueId.id) alreadyQueued = true;
        });

        if (!wasVisited && !alreadyQueued) {
          queue.push(_this2.adjacencyList[id]);
        }
      };

      while (queue.length > 0) {
        var node = queue.pop();
        visited.push(node.id);
        node.edges.forEach(function (id) {
          return addToQueue(id);
        });
        if (node.node[key] === val) results.push(node);
      }

      return results.length > 0 ? results : false;
    }
  }, {
    key: "createExponential",
    value: function createExponential(_ref) {
      var numOfNodes = _ref.numOfNodes;
      var adjacencyList = {};
      var root = {
        id: root,
        node: {
          name: 'root'
        },
        edges: []
      };
      var queue = [root];
      var nodesCreated = 1;
      var i = 0;
      adjacencyList[root.id] = root;

      while (true) {
        for (var j = 0; j < Math.pow(2, i); j++) {
          var parent = queue.shift();

          for (var k = 0; k < Math.pow(2, i + 1); k++) {
            if (nodesCreated <= numOfNodes) {
              var id = (0, _uuid["default"])();
              var childNode = {
                id: id,
                node: {
                  name: nodesCreated
                },
                edges: [parent.id]
              };
              queue.push(childNode);
              parent.edges.push(id);
              adjacencyList[id] = childNode;
              nodesCreated++;
            } else {
              return adjacencyList;
            }
          }
        }

        i++;
      }
    }
  }, {
    key: "createTree",
    value: function createTree(_ref2) {
      var numOfNodes = _ref2.numOfNodes,
          numOfChildren = _ref2.numOfChildren;
      var root = {
        id: 'root',
        node: {
          name: 'root'
        },
        edges: []
      };
      var queue = [root];
      var nodesCreated = 1;
      var i = 0;
      this.adjacencyList.root = root;

      while (true) {
        for (var j = 0; j < Math.pow(numOfChildren, i); j++) {
          var parent = queue.shift();

          for (var k = 0; k < numOfChildren; k++) {
            if (nodesCreated <= numOfNodes) {
              var id = (0, _uuid["default"])();
              var childNode = {
                id: id,
                node: {
                  name: nodesCreated
                },
                edges: [parent.id]
              };
              queue.push(childNode);
              parent.edges.push(id);
              this.adjacencyList[id] = childNode;
              nodesCreated++;
            } else {
              return;
            }
          }
        }

        i++;
      }
    }
  }, {
    key: "modifyConnectivity",
    value: function modifyConnectivity(connectivity) {
      var _this3 = this;

      var idRegistry = {
        root: true
      };
      var gens = [_toConsumableArray(this.adjacencyList.root.edges)];
      var totalNodes = Object.keys(this.adjacencyList).length;
      var nodesAdded = this.adjacencyList.root.edges.length;
      var genIndex = 0;

      var _loop = function _loop() {
        var tmpGen = [];
        gens[genIndex].forEach(function (nodeID) {
          return _this3.adjacencyList[nodeID].edges.forEach(function (edge) {
            if (!idRegistry[edge]) {
              idRegistry[edge] = true;
              tmpGen.push(edge);
              nodesAdded++;
            }
          });
        });
        gens.push(tmpGen);
        genIndex++;
      };

      while (nodesAdded < totalNodes) {
        _loop();
      }

      gens.forEach(function (gen) {
        return gen.forEach(function (fromID, i) {
          gen.forEach(function (toID) {
            if (connectivity > Math.random() && gen[i + 1]) {
              _this3.addEdge(fromID, gen[i + 1]);
            }
          });
        });
      });
    }
  }, {
    key: "print",
    value: function print() {
      var _this4 = this;

      Object.keys(this.adjacencyList).forEach(function (id) {
        _this4.printNode(id);
      });
    }
  }, {
    key: "printNode",
    value: function printNode(id) {
      console.log(this.adjacencyList[id]);
    }
  }]);

  return Graph;
}();

exports["default"] = Graph;