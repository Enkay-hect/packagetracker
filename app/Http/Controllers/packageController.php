<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
// use DB;
use Illuminate\Support\Str;


class packageController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function createdata(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'phone_number' => 'required',
            'postoffice' => 'required',
            'destination' => 'required',
            'sender_id' => 'required',
            'email' => 'required',
            //|email|unique:users
        ]);

        $data = $request->post();
        $createData = $this->create($data);


        return response([
            'packagedata'=> $createData,
        ]);

    }

            /**
         * Write code on Method
         *
         * @return response()
         */
        public function create(array $data)
        {
            return Package::create([
                'name' => $data['name'],
                'package_id' => Str::upper(Str::random(6)),
                'phone_number' => $data['phone_number'],
                'email' => $data['email'],
                'postoffice' => $data['postoffice'],
                'destination' => $data['destination'],
                'sender_id' => $data['sender_id'],
            ]);
        }


     /**
     * Write code on Method
     *
     * @return response()
     */
    public function generateUniqueNumber()
    {
                $package_id = Str::upper(Str::random(6));
            return $package_id;

    }

    public function getpackagedata(Request $request){
        $data = $request->only("package_id");

        // $data = $request->validated();
        if($details = Package::where(['package_id'=>$data['package_id']])->first()){
                return response([
                    'searchpackage' => $details
                ]);

        } else if(!$details = Package::where(['package_id'=>$data['package_id']])->first()){
            return response([
                'message'=>'invalid tracking id'
             ], 422);
        }
    }


    public function updatefinaldestination(Request $request){
        $data = $request->only('package_id');

        if($details = Package::where(['package_id'=>$data['package_id']])->first()){
            $change = Package::find($details)->first();
            $change->final_destination = 1;
            $change->update();
        }

    }


    public function updatenewdestination(Request $request){
        $data = $request->only('package_id', 'staffId', 'newdestination');

        if($details = Package::where(['package_id'=>$data['package_id']])->first()){

            $change = Package::find($details)->first();
            $change->destination = $data['newdestination'];
            $change->sender_id = $data['staffId'];
            // $change->package_id = $data['package_id'];
            $change->update();
        }

    }


}
