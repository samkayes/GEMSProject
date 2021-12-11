<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\EmployeeController;
use App\Http\Controllers\API\RequestController;

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
Route::post('/add-employee', [EmployeeController::class,'store']);
Route::post('/create-request', [RequestController::class,'store']);
Route::get('employees', [EmployeeController::class,'index']);
Route::get('requests', [RequestController::class,'index']);
Route::post('/approve/{id}', [RequestController::class,'approve']);
Route::post('/delete/{id}', [RequestController::class,'delete']);
Route::get('dashboard', [EmployeeController::class,'dashboard']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
