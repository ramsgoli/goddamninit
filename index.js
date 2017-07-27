#!/usr/bin/env node
const fs = require('fs');
const chalk = require('chalk');
const dot = require('dot');
const figlet = require('figlet');
const handlebars = require('handlebars');

console.log(
    chalk.yellow(
       figlet.textSync('Goddamninit')
    )
);

fs.readFile('templates/webpack.config.hbs', function(err, data) {
    if (!err) {
        let source = data.toString()
        let template = handlebars.compile(source)({entry: 'hello world'})
        console.log(template)
    } else {
        console.log(err)
    }
});

