'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('../actions/index.js');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookList = function (_Component) {
  _inherits(BookList, _Component);

  function BookList() {
    _classCallCheck(this, BookList);

    return _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).apply(this, arguments));
  }

  _createClass(BookList, [{
    key: 'renderList',
    value: function renderList() {
      var _this2 = this;

      return this.props.books.map(function (book) {
        return _react2.default.createElement('li', {
          className: 'collection-item',
          key: book.title,
          onClick: function onClick() {
            return _this2.props.selectBook(book);
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'collection' },
          this.renderList()
        ),
        _react2.default.createElement(
          'p',
          null,
          this.props.activeBook ? this.props.activeBook.title : "Choose A Star To See Your Future",
          ' '
        )
      );
    }
  }]);

  return BookList;
}(_react.Component);

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ selectBook: _index.selectBook }, dispatch);
}

function mapStateToProps(state) {
  return {
    books: state.books,
    activeBook: state.activeBook
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BookList);