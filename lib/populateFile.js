const path = require('path');
const fs = require('fs');


function populateFile(file) {
    fs.readFile(path.resolve(dirString, './templates/webpack.config.js.hbs'), function(err, data) {
        if (!err) {
            let source = data.toString();
            let template = handlebars.compile(source)({entry: 'hello world'});
        } else {
            console.log(err)
        }
    });
}