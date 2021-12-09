<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaveRequest extends Model
{
    use HasFactory;
    protected $table = "requests";
    protected $fillable = [
        'emp_id',
        'leavedate',
        'duration',
        'reason',
    ];

    public function employee()
    {
        return $this->hasOne(Employee::class);
    }
}
