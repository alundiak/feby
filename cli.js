#!/usr/bin/env node

const path = require('path'),
    febyLogic = require('./index'),
    cliOptions = require('./cli-options');
    //fN = require(path.join(__dirname, 'fileNameWhatEver'));

var optionsInput;
try {
    optionsInput = cliOptions.parse(process.argv);

    if (optionsInput.help) {
        console.info(cliOptions.generateHelp());
        return 1;
    } else if (optionsInput.version) {
        var pkg = require(path.join(__dirname, '../', 'package.json')); // moved here to avoid issues with local vs. remote usage of "--version"
        console.info(`v${pkg.version}`);
        return 1;
    }
} catch (error) {
    throw new Error(error.message);
}

try {
    console.log(febyLogic(optionsInput));
} catch (e) {
    console.log(e);
    throw new Error(e.message);
}