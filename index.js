module.exports = function feby(options) {
    //const fs = require('fs');
    //const path = require('path');

    options = options || {};

    if (options.firstName && options.lastName) {
        return options.firstName + ' ' + options.lastName;
    } else {
    	throw new Error ('Please provide first and last names.');
    }
};