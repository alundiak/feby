module.exports = function feby(options = {}) {
  if (options.firstName && options.lastName) {
    return options.firstName + ' ' + options.lastName;
  } else {
    throw new Error('Please provide first and last names.');
  }
};
