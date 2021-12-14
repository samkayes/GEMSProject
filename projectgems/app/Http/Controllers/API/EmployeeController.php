<?php

namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Auth; 
use App\Models\User; 
use Validator;
use Illuminate\Support\Str;
use App\Models\Employee;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\HasApiTokens;


class EmployeeController extends Controller
{   
    use HasApiTokens;
    public function index()
    {
        $employees = Employee::all();

        return response()->json([
            'status'=> 200,
            'employees' => $employees,
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'fname' =>'required|max:191',
            'mname' =>'required|max:191',
            'lname' =>'required|max:191',
            'address' =>'required|max:191',
            'contact_num' =>'required|min:11|max:11',
            'email' =>'required|email|max:191',
            'emcon' =>'required|min:11|max:11',
            'role'=>'required|max:191',
            'username'=>'required|max:191',
            'user_type'=>'required|max:191',
            'password'=>'required|min:8|max:191',
            ]);

        if($validator->fails()){
            return response()->json([
                'validate_err'=> $validator->messages(),
            ]);
        }else{
        $employee = new Employee;
        $employee->first_name = $request->input('fname');
        $employee->mid_name = $request->input('mname');
        $employee->last_name = $request->input('lname');
        $employee->address = $request->input('address');
        $employee->contact_num = $request->input('contact_num');
        $employee->email = $request->input('email');
        $employee->emergency_contact = $request->input('emcon');
        $employee->role = $request->input('role');
        $employee->username = $request->input('username');
        $employee->user_type = 'employee';
        $employee->password = $request->input('password');
        $employee->save();

        return response()->json([
            'status'=> 200,
            'message' => 'Employee Added Successfully',
        ]);
        }
    }

    
    
}
