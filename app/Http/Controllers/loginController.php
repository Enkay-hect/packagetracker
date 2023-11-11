<?php

namespace App\Http\Controllers;

use App\Http\Requests\loginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class loginController extends Controller
{
    public function signIn(Request $request)
    {

        $credentials = $request->only(['staffId', 'password']);

        if (!Auth::attempt($credentials, $request->get('remember'))) {
            return response([
                'error' => 'Invalid credentials',
            ], 422);

        }



        $user = Auth::user();

    

        /** @var \App\Models\User $user * */
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user'  => $user,
            'token' => $token,
        ]);
    }
}
