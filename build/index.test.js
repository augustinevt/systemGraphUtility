"use strict";

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('addNode', function () {
  expect(sensitiveWords('Chillo', ['switch'])).toBe('The name of the NX with be Nintendo ****');
});