"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Cell = _interopRequireDefault(require("./Cell"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: solid;\n  margin: 10px;\n  display: flex;\n  width: 60%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var PatternManager =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PatternManager, _React$Component);

  function PatternManager(props) {
    var _this;

    _classCallCheck(this, PatternManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PatternManager).call(this, props));
    _this.state = {
      mouseDown: false,
      isDrag: false,
      id: 'vow',
      val: '',
      cells: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onDragOver = _this.onDragOver.bind(_assertThisInitialized(_this));
    _this.cellMouseDown = _this.cellMouseDown.bind(_assertThisInitialized(_this));
    _this.mouseDown = _this.mouseDown.bind(_assertThisInitialized(_this));
    _this.mouseUp = _this.mouseUp.bind(_assertThisInitialized(_this));
    _this.mouseLeave = _this.mouseLeave.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PatternManager, [{
    key: "onDragOver",
    value: function onDragOver(i, val) {
      if (this.state.isDrag && this.mouseDown) {
        var newCells = _toConsumableArray(this.state.cells);

        newCells[i] = val === 1 || val === 0 ? 2 : 0;
        this.setState(_objectSpread({}, this.state, {
          cells: newCells
        }));
      }
    }
  }, {
    key: "cellMouseDown",
    value: function cellMouseDown(i, val) {
      console.log('cellMouseDown');
      this.setState(_objectSpread({}, this.state, {
        mouseDown: true,
        val: val,
        id: i
      }));
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(i, val) {
      console.log('MouseDown');
    }
  }, {
    key: "mouseUp",
    value: function mouseUp() {
      if (!this.state.isDrag) {
        var newCells = _toConsumableArray(this.state.cells);

        newCells[this.state.id] = this.state.val === 2 || this.state.val === 0 ? 1 : 0;
        this.setState({
          cells: newCells,
          mouseDown: false
        });
      } else {
        this.setState(_objectSpread({}, this.state, {
          mouseDown: false,
          isDrag: false
        }));
      }

      this.props.handler(this.state.cells);
    }
  }, {
    key: "mouseLeave",
    value: function mouseLeave(i, val) {
      if (!this.state.isDrag && this.state.mouseDown) {
        var newCells = _toConsumableArray(this.state.cells);

        newCells[this.state.id] = this.state.val === 0 || this.state.val === 1 ? 2 : 0;
        this.setState({
          cells: newCells,
          isDrag: true
        });
      }
    }
  }, {
    key: "onClick",
    value: function onClick(i) {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var jsx3 = this.state.mouseDown ? _react["default"].createElement("div", null, " mY ") : _react["default"].createElement("div", null, " mN ");
      var jsx4 = this.state.isDrag ? _react["default"].createElement("div", null, " dY ") : _react["default"].createElement("div", null, " dN ");
      return _react["default"].createElement(Wrapper, {
        onMouseUp: this.mouseUp
      }, this.state.cells.map(function (cellVal, i) {
        return _react["default"].createElement(_Cell["default"], {
          cellVal: cellVal,
          index: i,
          onClick: _this2.onClick,
          onDragOver: _this2.onDragOver // mouseDown={this.state.mouseDown}
          ,
          mouseLeave: _this2.mouseLeave,
          cellMouseDown: _this2.cellMouseDown
        });
      }));
    }
  }]);

  return PatternManager;
}(_react["default"].Component);

var _default = PatternManager;
exports["default"] = _default;