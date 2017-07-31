module.exports = {
    BASE_FILE_STRUCTURE: [
        'webpack.config.js',
        '.babelrc',
        {
            public: [
                'index.html'
            ]
        },
        {
            src: [
                'index.js',
                {
                    components: [
                        'App.js'
                    ]
                }
            ]
        }
    ]
};