const fs = require('fs');
const chalk = require('chalk');
const dot = require('dot');
const figlet = require('figlet');
const handlebars = require('handlebars');
const init = require('init-package-json');
const path = require('path');
const { execSync } = require('child_process')

const argParse = require('./lib/argParse');
const makeDirectoryWithName = require('./lib/makeDirectoryWithName');
const config = require('./config');
const createFileStructure = require('./lib/createFileStructure');
const initializeDependencies = require('./lib/initializeDependencies');

const dirString = path.dirname(fs.realpathSync(__filename));

const DEPENDENCIES = ['react', 'react-dom'];
const DEV_DEPENDENCIES = [
    'webpack', 'webpack-dev-server', 'babel-loader',
    'babel-core', 'babel-preset-env', 'babel-preset-react',
    'html-webpack-plugin'
];

console.log(
    chalk.yellow(
       figlet.textSync('goddamninit')
    )
);

const argv = argParse();
const directoryName = argv._[0];

if (directoryName) {
    makeDirectoryWithName(directoryName);
    process.chdir(directoryName);
}

try{
    execSync('npm init --y', function(err) {
        console.log(
            chalk.red(err)
        );
    });
    createFileStructure(config.BASE_FILE_STRUCTURE);
}
catch(err) {
    console.log(
        chalk.red(err)
    );
    process.exit(-1);
}

initializeDependencies(DEPENDENCIES, DEV_DEPENDENCIES);

console.log(
    chalk.green(
        "Your project has been initialized!"
    )
);
process.exit(0);