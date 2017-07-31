const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const handlebars = require('handlebars');
const initJson = require('init-package-json');

module.exports = function(name) {
    const dirString = path.dirname(fs.realpathSync(__filename));
    const data = fs.readFileSync(path.join(dirString, "..", `templates/${name}`));
    if (data) {
        fs.writeFileSync(name, data)
    }
}