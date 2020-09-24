<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Route::view('/orders', 'app');
Route::view('/', 'app');
Route::view('/Dashboard', 'app');
Route::view('/Checkout', 'app');
Route::view('/DeliveryPersons','app');
Route::view('/stocks','app');
Route::view('/SalesManagerDashboard', 'app');
Route::view('/EmployeeManagerDashboard', 'app');
Route::view('/MarketingManagerDashboard', 'app');
Route::view('/StockManagerDashboard', 'app');
Route::view('/SupplierManagerDashboard', 'app');

Route::view('/Expenses','app');
Route::view('/Sales','app');
Route::view('/Payments','app');
Route::view('/Employees','app');
Route::view('/Leaves','app');

