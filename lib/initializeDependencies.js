const { execSync } = require('child_process');

module.exports = function(deps, devDeps) {
    execSync(`npm install ${deps.join(' ')} --save`);
    execSync(`npm install ${devDeps.join(' ')} --save-dev`);
}