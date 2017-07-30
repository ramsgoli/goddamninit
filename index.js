#!/usr/bin/env node
const fs = require('fs');
const chalk = require('chalk');
const dot = require('dot');
const figlet = require('figlet');
const handlebars = require('handlebars');
const init = require('init-package-json');
const path = require('path');

const argParse = require('./lib/argParse');
const makeDirectoryWithName = require('./lib/makeDirectoryWithName');
const config = require('./config');
const createFileStructure = require('./lib/createFileStructure')

const dirString = path.dirname(fs.realpathSync(__filename));

console.log(
    chalk.yellow(
       figlet.textSync('goddamninit')
    )
);

const argv = argParse();
const directoryName = argv._[0];

if (directoryName) {
    makeDirectoryWithName(directoryName)
    process.chdir(directoryName)
}

try{
    createFileStructure(config.BASE_FILE_STRUCTURE);
}
catch(err) {
    console.log(
        chalk.red('shit')
    )
}

console.log(
    chalk.green(
        "Your project has been initialized!"
    )
);
process.exit(0);

