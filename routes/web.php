<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// USER
Route::get('/', function () {
    return view('pages.user.user-main');
});

// ADMIN
Route::get('/backend/{vue_capture?}', function () {
    return view('pages.admin.admin-main');
})->where('vue_capture', '[\/\w\.-]*');
