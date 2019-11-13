<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// User list
Route::get('/users', 'UserController@users')->name('app_user_filter');

// User list all
Route::get('/users/cache', 'UserController@usersCache')->name('app_user_list');

// Single user
Route::get('/user/{id}', 'UserController@user')->name('app_single_user');
