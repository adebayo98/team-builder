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

// User Login
Route::post('/user/credentials', 'CredentialController@login')
    ->name('app_user_login');

// User Register
Route::post('/user/register', 'UserController@register')
    ->name('app_user_register');

// User Register
Route::get('/roles', 'UserController@rolesList')
    ->name('app_roles_list');

// User list filter
Route::get('/users/filter', 'UserController@usersFilter')
    ->name('app_user_filter');

// User list static
Route::get('/users', 'UserController@users')
    ->name('app_user_list');

// User list static
Route::put('/user/{id}', 'UserController@edit')
    ->name('app_user_update');

// User skills insert or update
Route::post('/user/{user_id}/skill/{skill_id}/{note}', 'UserController@addUserSkills')
    ->name('app_manage_user_skill');

// Delete user skill
Route::delete('/user/{user_id}/skill/{skill_id}', 'UserController@deleteUserSkills')
    ->name('app_delete_user_skill');

// User list random
Route::get('/users/random/{limit}', 'UserController@usersRandom')
    ->name('app_user_list_random');

// Single user
Route::get('/user/{id}', 'UserController@user')
    ->name('app_single_user');

// Skills
Route::get('/skills', 'SkillController@skills')
    ->name('app_skill_list');

// Skill types
Route::get('/skill/types', 'SkillController@skillTypes')
    ->name('app_skill_types_list');

// Skill types
Route::get('/skill/notes', 'SkillController@skillNotes')
    ->name('app_skill_notes_list');

// Formations
Route::get('/formations', 'FormationController@formations')
    ->name('app_formation_list');
