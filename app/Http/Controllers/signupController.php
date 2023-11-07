<?php

namespace App\Http\Controllers;

use App\Http\Requests\signuprequest;
use App\Models\User;
use Illuminate\Http\Request;

class signupController extends Controller
{
    public function signUp(signuprequest $request)
    {
        $data       = $request->validated();
        $createUser = $this->create($data);



        return response([
            'status' => 'success',
            'user'   => User::find($createUser->id),
        ]);
    }

    public function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email'  => $data['email'],
            'staff_id'     => $data['staff_id'],
            'phone_number'   => $data['phone_number'],
            'password'  => bcrypt($data['password']),
        ]);
    }
}
