#!/usr/bin/env node
const fs = require('fs');
const chalk = require('chalk');
const dot = require('dot');
const figlet = require('figlet');
const handlebars = require('handlebars');
const init = require('init-package-json');
const path = require('path');
const { execSync } = require('child_process');

const getArgs = require('./lib/getArgs');
const getDirectoryName = require('./lib/getDirectoryName');
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

function index(args) {
    args = args || getArgs();

    console.log(
        chalk.yellow(
            figlet.textSync('goddamninit')
        )
    );

    const directoryName = getDirectoryName(args);

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
}

index();
