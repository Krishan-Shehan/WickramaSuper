<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
             $table->bigIncrements('employee_id');
             $table->string('employee_name', 100);
             $table->string('email', 50);
             $table->set('job_role', ['Cashier', 'Delivery Person','Sales Manager','Order Manager','Stock Manager','Customer Manager','Employee Manager','Supplier Manager','Marketing Manager']);
             $table->string('contact_number', 10);
             $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
