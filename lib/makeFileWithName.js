const fs = require('fs');
const chalk = require('chalk');

module.exports = function(name) {
    try {
        fs.openSync(name, 'w+');
    }
    catch(err) {
        console.log(
            chalk.red(`Whoops, looks like the file ${name.toUpperCase()} already exists.`)
        );
        process.exit(-1);
    }
}