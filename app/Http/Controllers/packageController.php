<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;
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
            'destination' => 'required',
            'sender_id' => 'required',
            'email' => 'required|email|unique:users',
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
        // do {

                $package_id = Str::upper(Str::random(6));
            // }      while (Package::where("package_id", "=", $package_id)->first());

            return $package_id;

    }

    public function getpackagedata(Request $request){
        $data = $request->only('package_id');

        // $users = App\Models\Package::select('id', 'name')->get();

        if($details = Package::where(['package_id' => $data['package_id']])->first()){
            // $detail = $details->packinfo;

            return response([
                'searchpackage' => $details
            ]);
        }
        else {
            return response([
               'invalid tracking id'
            ]);
        }
    }

    public function updatepackage(Request $request){
        $data = $request->only('package_id');

        // $users = App\Models\Package::select('id', 'name')->get();

        if($details = Package::where(['package_id' => $data['package_id']])->first()){
            // $detail = $details->packinfo;

            return response([
                'searchpackage' => $details
            ]);
        }
        else {
            return response([
               'invalid tracking id'
            ]);
        }
    }



}
