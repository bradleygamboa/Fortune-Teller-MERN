'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];


    switch (action.type) {
        case 'BOOK_SELECTED':
            console.log('active book reducer reached');
            return action.payload;
    }

    return state;
};