<?php

use App\Http\Controllers\DeliveryPersonController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LeaveController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\OfferController;
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
//Route::get('stocks',[StockController::class, 'index']);
Route::get('Sales',[SalesController::class,'index']);
Route::get('Payments',[PaymentController::class,'index']);

Route::get('Leaves',[LeaveController::class,'index']);
//Route::get('Customers',[CustomerController::class,'index']);
//Route::delete('Employees/{id}', [EmployeeController::class,'destroy']);
//Route::post('Employees/',[EmployeeController::class,'store']);
//Route::put('Employees/{id}',[EmployeeController::class,'update']);

Route::get('/expenses', [ExpenseController::class,'index']);
Route::post('/expenses', [ExpenseController::class,'store']);
Route::get('/expenses/{expense}', [ExpenseController::class,'show']);
Route::put('/expenses/{expense}', [ExpenseController::class,'update']);
Route::delete('/expenses/{expense}',[ExpenseController::class,'destroy']);

Route::get('/stocks', [StockController::class,'index']);
Route::post('/stocks', [StockController::class,'store']);
Route::get('/stocks/{stock}', [StockController::class,'show']);
Route::put('/stocks/{stock}', [StockController::class,'update']);
Route::delete('/stocks/{stock}',[StockController::class,'destroy']);

Route::get('/employees', [EmployeeController::class,'index']);
Route::post('/employees', [EmployeeController::class,'store']);
Route::get('/employees/{employee}', [EmployeeController::class,'show']);
Route::put('/employees/{employee}', [EmployeeController::class,'update']);
Route::delete('/employees/{employee}',[EmployeeController::class,'destroy']);

Route::get('/customers', [CustomerController::class,'index']);
Route::post('/customers', [CustomerController::class,'store']);
Route::get('/customers/{customer}', [CustomerController::class,'show']);
Route::put('/customers/{customer}', [CustomerController::class,'update']);
Route::delete('/customers/{customer}',[CustomerController::class,'destroy']);

Route::get('/suppliers', [SupplierController::class,'index']);
Route::post('/suppliers', [SupplierController::class,'store']);
Route::get('/suppliers/{supplier}', [SupplierController::class,'show']);
Route::put('/suppliers/{supplier}', [SupplierController::class,'update']);
Route::delete('/suppliers/{supplier}',[SupplierController::class,'destroy']);

Route::get('/offers', [OfferController::class,'index']);
Route::post('/offers', [OfferController::class,'store']);
Route::get('/offers/{offer}', [OfferController::class,'show']);
Route::put('/offers/{offer}', [OfferController::class,'update']);
Route::delete('/offers/{offer}',[OfferController::class,'destroy']);
