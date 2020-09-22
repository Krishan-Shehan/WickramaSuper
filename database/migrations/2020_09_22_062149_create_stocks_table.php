<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stocks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->char('product_name', 50);
            $table->float('quantity', 8, 2);
            $table->double('cost_price', 8, 2);
            $table->double('selling_price', 8, 2);
            $table->float('current_stock', 8, 2);
            $table->boolean('availability');
            $table->date('exp-date');
            $table->string('brand_id',20);
            $table->string('category_id',20);
            $table->string('product_image',150);
            $table->string('category_name',100);
            $table->string('brand_name',100);
            $table->string('supplier_name',150);
            $table->string('supplier_id',50);
            $table->string('supplier_add',100);
            $table->boolean('reminder');
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
        Schema::dropIfExists('stocks');
    }
}
