<?php

use App\Http\Controllers\loginController;
use App\Http\Controllers\packageController;
use App\Http\Controllers\signupController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/signup', [signupController::class, 'signUp'])->name('signup');
Route::post('/login', [loginController::class, 'signIn'])->name('signIn');
Route::post('/createdata', [packageController::class, 'createdata'])->name('createdata');

Route::post('/getpackagedata', [packageController::class, 'getpackagedata'])->name('getpackagedata');
