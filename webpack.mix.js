const mix = require('laravel-mix');

/*
    |--------------------------------------------------------------------------
    | Mix Asset Management
    |--------------------------------------------------------------------------
    |
    | Mix provides a clean, fluent API for defining some Webpack build steps
    | for your Laravel application. By default, we are compiling the Sass
    | file for the application as well as bundling up all the JS files.
    |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/admin.js', 'public/js')
    .copy('resources/assets/css/admin/font-awesome.min.css', 'public/css/admin')
    .copy('resources/assets/css/admin/jquery.mCustomScrollbar.css', 'public/css/admin')
    .copy('resources/assets/css/admin/fontastic.css', 'public/css/admin')
    .copy('resources/assets/css/admin/grasp_mobile_progress_circle-1.0.0.min.css', 'public/css/admin')
    .copy('resources/assets/css/admin/style.blue.css', 'public/css/admin')
    .copy('resources/assets/css/admin/mCSB_buttons.png', 'public/css/admin')
    .sass('resources/sass/app.scss', 'public/css');
