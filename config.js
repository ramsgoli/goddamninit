module.exports = {
    BASE_FILE_STRUCTURE: [
        'webpack.config.js',
        '.babelrc',
        'package.json',
        {
            src: [
                {
                    client: [
                        'index.html',
                        {
                            components: [
                                'App.js'
                            ]
                        },
                        {
                            public: [
                                'build.js',
                                'style.css'
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};