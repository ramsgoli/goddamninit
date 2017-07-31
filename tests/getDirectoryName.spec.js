const getDirectoryName = require('../lib/getDirectoryName');

describe('getDirectoryName', () => {
    it('should return the directory name from the command line arguments', () => {
        const args = {_: ['foo']};
        expect(getDirectoryName(args)).toEqual('foo')
    })
});