<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $table = "employees";
    protected $fillable = [
        'fname',
        'mname',
        'lname',
        'address',
        'contact_num',
        'email',
        'emcon',
        'role',
        'username',
        'user_type',
        'password',

    ];
}
