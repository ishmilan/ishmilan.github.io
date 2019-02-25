module.exports = {
    title: 'Ish Milan',
    description: 'Sysadmin & software developer',
    base: '/',
    dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#282a36' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/images/logo.png' }],
        ['link', { rel: 'mask-icon', href: '/images/logo.png', color: '#282a36' }],
        ['meta', { name: 'msapplication-TileImage', content: '/images/logo.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#f55005' }]
    ],
    themeConfig: {
        logo: '/images/logo.png',
        nav: [{
                text: 'Inicio',
                link: '/'
            },
            {
                text: 'Perfil',
                link: '/profile/'
            },
            // {
            //     text: 'Contacto',
            //     link: 'https://ishmilan.github.io/'
            // },
        ]
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader', // creates style nodes from JS strings
                'css-loader', // translates CSS into CommonJS
                'sass-loader' // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
}