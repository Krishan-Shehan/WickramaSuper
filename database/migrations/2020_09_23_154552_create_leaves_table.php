<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeavesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leaves', function (Blueprint $table) {
            $table->bigIncrements('leave_id');
            $table->integer('employee_id');
            $table->string('employee_name', 100);
            $table->set('job_role', ['Cashier', 'Delivery Person','Sales Manager','Order Manager','Stock Manager','Customer Manager','Employee Manager','Supplier Manager','Marketing Manager']);
            $table->set('leave_type', ['paid', 'non_paid']);
            $table->string('email', 50);
            $table->date('date');
            $table->integer('no_of_days');
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
        Schema::dropIfExists('leaves');
    }
}
