const optionator = require('optionator');

// exports 'parse(args)', 'generateHelp()', and 'generateHelpForOption(optionName)'
 
module.exports = optionator({
  prepend: 'Feby [options]',
  defaults: {
    concatRepeatedArrays: true,
    mergeRepeatedObjects: true
  },
  options: [{
    heading: 'Feby CLI configuration'
  }, {
    option: 'firstName',
    alias: 'first',
    type: 'String',
    default: 'John',
    description: 'First Name value'
  }, {
    option: 'lastName',
    alias: 'last',
    type: 'String',
    default: 'Doe',
    description: 'Last Name value'
  }, {
    option: 'filePath',
    type: 'path::String',
    description: 'TBD.'
  }, {
    option: 'mode',
    type: 'Boolean',
    description: 'TBD.'
  }, {
    option: 'version',
    alias: 'v',
    type: 'Boolean',
    description: 'Output the version number'
  }, {
    option: 'help',
    alias: 'h',
    type: 'Boolean',
    description: 'Show this help'
  }]
});
