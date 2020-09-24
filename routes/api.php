<?php

use App\Http\Controllers\DeliveryPersonController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LeaveController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('orders',[OrderController::class, 'index']);
Route::get('DeliveryPersons',[DeliveryPersonController::class,'index']);
Route::get('stocks',[StockController::class, 'index']);
Route::get('Sales',[SalesController::class,'index']);
Route::get('Expenses',[ExpenseController::class,'index']);
Route::get('Payments',[PaymentController::class,'index']);
Route::get('Employees',[EmployeeController::class,'index']);
Route::get('Leaves',[LeaveController::class,'index']);

