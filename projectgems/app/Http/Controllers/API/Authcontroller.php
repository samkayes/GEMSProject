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


class AuthController extends Controller
{
  
   use HasApiTokens;
   private $apiToken;
   public function __construct()
    {
    $this->apiToken = uniqid(base64_encode(Str::random(40)));
    }
  /** 
   * 
   * @return \Illuminate\Http\Response 
   */ 

   public function login(Request $request){ 
      
      $validator = Validator::make($request->all(),[
      'username' => 'required',
      'password' => 'required',
      ]);

      if($validator->fails()){
      return response()->json([
         'validation_errors' => $validator->messages(),
      ]);
      }else{
      $user = Employee::where('username', $request->username)->first();
      if(! $user ){ //! $user || ! Hash::check($request->password, $user->password)
         return response()->json([
         'status' => 401,
         'message' => 'Invalid Credentials',
         ]);
      }else{
         // $token = $user->_construct($request.'_Token')->plainTextToken;
         $token = uniqid(base64_encode(Str::random(40)));
         return response()->json([
            'status' =>200,
            'username' => $user->username,
            'token' => $token,
            'message' => 'Logged In Sucessfully',
         ]);
      }
      }
   }
  
}