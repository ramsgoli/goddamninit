const createFileStructure = require('../lib/createFileStructure');
const fs = require('fs');

describe('createFileStructure', () => {
    it('should create a file structure based on config object passed in', () => {
        const FILE_STRUCTURE = [
            'index.html',
            {
                dir1: [
                    '.babelrc',
                ]
            }
        ];
        createFileStructure(FILE_STRUCTURE);
        fs.access('index.html', fs.constants.F_OK, (err) => {
            expect(err).toEqual(null);
            fs.unlinkSync('index.html');
            fs.unlinkSync('dir1/.babelrc');
            fs.rmdirSync('dir1');
        })
    })
});