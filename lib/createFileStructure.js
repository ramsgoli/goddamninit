const config = require('../config.js');
const makeDirectoryWithName = require('./makeDirectoryWithName');
const makeFileWithName = require('./makeFileWithName');
const populateFile = require('./populateFile')

function createFileStructure(dir) {
    dir.forEach(function(node) {
        if (typeof node === 'string') {
            // node is a file. search templates folder for the file
            makeFileWithName(node)
        } else if (typeof node === 'object') {
            // node is a directory
            const dirName = Object.keys(node)[0];
            makeDirectoryWithName(dirName);
            process.chdir(dirName);
            createFileStructure(node[dirName]);
            process.chdir('..')
        }
    })
}

module.exports = createFileStructure;