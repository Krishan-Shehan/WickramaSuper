<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    protected $fillable = ["id", "product_name", "quantity", "cost_price", "selling_price", "exp-date", "category_name", "brand_name"];
}
