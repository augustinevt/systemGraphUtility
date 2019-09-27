"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 10%;\n  background: ", ";\n  width: 2.8%;\n  height: 20px;\n  margin: 0.3%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Cello = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var cellVal = _ref.cellVal;
  if (cellVal === 2) return 'green';else if (cellVal === 1) return 'orange';else return 'grey';
});

var Cell = function Cell(_ref2) {
  var cellVal = _ref2.cellVal,
      index = _ref2.index,
      _onClick = _ref2.onClick,
      onDragOver = _ref2.onDragOver,
      mouseLeave = _ref2.mouseLeave,
      cellMouseDown = _ref2.cellMouseDown;
  return _react["default"].createElement(Cello, {
    onClick: function onClick() {
      _onClick(index, cellVal);
    },
    onMouseDown: function onMouseDown() {
      cellMouseDown(index, cellVal);
    },
    onMouseOver: function onMouseOver() {
      onDragOver(index, cellVal);
    },
    onMouseOut: function onMouseOut() {
      mouseLeave(index, cellVal);
    },
    cellVal: cellVal
  });
};

var _default = Cell;
exports["default"] = _default;