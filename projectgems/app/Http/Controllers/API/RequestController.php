<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LeaveRequest;
use App\Models\Employee;

class RequestController extends Controller
{
    public function index()
    {
        $reqList = LeaveRequest::all();

        return response()->json([
            'status'=> 200,
            'requests' => $reqList,
        ]);
    }

    public function store(Request $request)
    {
        $leavereq = new LeaveRequest;
        $leavereq->emp_id = $request->input('emp_id');
        $leavereq->leavedate = $request->input('leavedate');
        $leavereq->duration = $request->input('duration');
        $leavereq->reason = $request->input('reason');
        $leavereq->approved = false;

        $leavereq->save();

        return response()->json([
            'status'=> 200,
            'message' => 'Request Added Successfully',
        ]);
    }

    public function approve(Request $request, $id)
    {
        $leavereq = LeaveRequest::where('request_id', $id)->first();
        $updater = '';
        if($leavereq->approved==true){
            $updater = 0;
        }else{
            $updater = 1;
        }
        LeaveRequest::where('request_id', $id)->update(['approved' => $updater]);

        return response()->json([
            'status'=> 200,
            'message'=> 'Approve/disapprove successful',
        ]);
    }
}
