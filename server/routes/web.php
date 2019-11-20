<?php

use Illuminate\Support\Facades\DB;

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

Route::get('/', function () {
    echo "<center> <h1> Team builder api </h1> </center>";
    $users = DB::table('users')->get('id');

    foreach ($users as $user){
        DB::table('users')
            ->where('id', '=', $user->id)
            ->update(['main_skill_id' => rand(12, 16)]);
    }
});
