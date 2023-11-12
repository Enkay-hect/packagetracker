<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'package_id',
        'email',
        'phone_number',
        'postoffice',
        'destination',
        'final_destination',
        'sender_id',
    ];
}
