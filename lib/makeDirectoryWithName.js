const fs = require('fs');
const chalk = require('chalk');

module.exports = function(dirName) {
    try {
        fs.mkdirSync(dirName);
    } catch(err) {
        console.log(
            chalk.red(`Whoops, looks like the directory ${dirName.toUpperCase()} already exists`)
        );
        process.exit(-1);
    }
};
