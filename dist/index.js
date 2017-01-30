'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithMiddleware = (0, _redux.applyMiddleware)()(_redux.createStore);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: createStoreWithMiddleware(_reducers2.default) },
  _react2.default.createElement(_App2.default, null)
), document.querySelector('.container'));