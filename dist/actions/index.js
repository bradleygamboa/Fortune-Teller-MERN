'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectBook = selectBook;
function selectBook(book) {

  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}