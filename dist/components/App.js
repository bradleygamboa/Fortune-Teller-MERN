'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BookList = require('../containers/BookList.js');

var _BookList2 = _interopRequireDefault(_BookList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
        // initialize the component's state here.
        // bind methods here.
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'header',
                    { className: 'text-center' },
                    'Zoltar Speaks'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'jumbotron text-center' },
                    _react2.default.createElement(_BookList2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'text-center' },
                    _react2.default.createElement('iframe', { width: '378', height: '270', src: 'https://www.youtube.com/embed/uigpbM983dg', frameBorder: '0', allowFullScreen: true }),
                    '\xA0',
                    _react2.default.createElement('iframe', { width: '377', height: '270', src: 'https://www.youtube.com/embed/FQ0sHPD5JMg', frameBorder: '0', allowFullScreen: true }),
                    '\xA0',
                    _react2.default.createElement('iframe', { width: '377', height: '270', src: 'https://www.youtube.com/embed/YOKGJvLENqI', frameBorder: '0', allowFullScreen: true })
                ),
                _react2.default.createElement(
                    'footer',
                    { className: 'navbar-fixed-bottom text-center' },
                    _react2.default.createElement(
                        'a',
                        { target: '_blank', href: 'http://www.bradleygamboa.me' },
                        _react2.default.createElement('i', { className: 'fa fa-user-circle fa-lg', 'aria-hidden': 'true' })
                    ),
                    '\xA0',
                    _react2.default.createElement(
                        'a',
                        { target: '_blank', href: 'http://www.github.com/bradleygamboa' },
                        _react2.default.createElement('i', { className: 'fa fa-github-square fa-lg', 'aria-hidden': 'true' })
                    ),
                    '\xA0',
                    _react2.default.createElement(
                        'a',
                        { target: '_blank', href: 'http://www.linkedin.com/in/bradleygamboa' },
                        _react2.default.createElement('i', { className: 'fa fa-linkedin-square fa-lg', 'aria-hidden': 'true' })
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;