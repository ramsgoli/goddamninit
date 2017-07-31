const { execSync } = require('child_process');

module.exports = function(deps, devDeps) {
    console.log(devDeps.join(' '));
    execSync(`npm install ${deps.join(' ')} --save`);
    execSync(`npm install ${devDeps.join(' ')} --save-dev`);
}