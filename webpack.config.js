var Encore = require('@symfony/webpack-encore');
const path = require('path')

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath((Encore.isProduction() ? '' : 'http://valeriechapple.test:8880') + '/build')
    // only needed for CDN's or subdirectory deploy
    //.setManifestKeyPrefix('build/')
    .configureDevServerOptions(options => {
          options.allowedHosts = 'all'
          options.host         = '0.0.0.0';
          options.port = 8880
        })


    .addEntry('app', './assets/app.ts')

    // .addCacheGroup('vendor')
    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    // .enableSingleRuntimeChunk()
    .disableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())
    .enableVueLoader(() => {}, {
      runtimeCompilerBuild: true,
      version: 3 })

    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        '_': 'lodash',
        'axios': 'axios',
    })
    .configureBabel((config) => {
          config.plugins.push('@babel/plugin-transform-class-properties');
      })

    // enables and configure @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.38';
    })

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    .enableTypeScriptLoader(function (typeScriptConfigOptions) {
    typeScriptConfigOptions.silent = true;
    typeScriptConfigOptions.appendTsSuffixTo = true;
    // typeScriptConfigOptions.transpileOnly = true;
    // if (Encore.isProduction()) typeScriptConfigOptions.compilerOptions.noImplicitAny = false
})

    // Copy images/files for non-JS file access
    .copyFiles({
        from: './assets/static',
        pattern: /\.(png|jpg|jpeg)$/,
        // to: Encore.isProduction() ? 'static/[path][name].[hash:8].[ext]' : 'static/[path][name].[ext]'
        to: 'static/[path][name].[ext]'
    })
;

// .. rest of configuration
if (!Encore.isProduction()) {
  Encore
    // .setPublicPath('http://valeriechapple.test:8080/build/')
    .setManifestKeyPrefix('/build/')
    .configureDefinePlugin(() => {return {
      '__VUE_OPTIONS_API__': true,
      '__VUE_PROD_DEVTOOLS__': true,
      '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false
    }})
  ;
}

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()


let config = Encore.getWebpackConfig();

config.resolve.alias = {
  'vue': 'vue/dist/vue.esm-bundler.js',
  '@assets': path.resolve(__dirname, '/assets/'),
}

module.exports = config
