'use strict';

var optionator = require('optionator');

// exports 'parse(args)', 'generateHelp()', and 'generateHelpForOption(optionName)'
module.exports = optionator({
    prepend: 'Feby [options]',
    defaults: {
        concatRepeatedArrays: true,
        mergeRepeatedObjects: true
    },
    options: [{
            heading: 'Feby CLI configuration'
        },
        {
            option: 'firstName',
            alias: 'first',
            type: 'String',
            default: 'true',
            description: 'TBD'
        },
        {
            option: 'lastName',
            alias: 'last',
            type: 'String',
            description: 'TBD.'
        }, 
        {
            option: 'filePath',
            type: 'path::String',
            description: 'TBD.'
        },
        {
            option: 'mode',
            type: 'Boolean',
            description: 'TBD.'
        }, 
        {
            option: 'version',
            alias: 'v',
            type: 'Boolean',
            description: 'Output the version number'
        },
        {
            option: 'help',
            alias: 'h',
            type: 'Boolean',
            description: 'Show this help'
        }
    ]
});