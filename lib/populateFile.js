const path = require('path');
const fs = require('fs');


function populateFile(file) {
    const dirString = path.dirname(fs.realpathSync(__filename));
    console.log(dirString);
    fs.readFile(path.resolve(dirString, './templates/webpack.config.js'), function(err, data) {
        if (!err) {
            let source = data.toString();
            let template = handlebars.compile(source)({entry: 'hello world'});
        } else {
            console.log(err)
        }
    });
}