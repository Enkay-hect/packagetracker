<?php

namespace App\Http\Controllers;

use App\Http\Requests\loginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class loginController extends Controller
{
    public function signIn(loginRequest $request)
    {

        $credentials = $request->only(['email', 'password']);

        if (!Auth::attempt($credentials, $request->get('remember'))) {
            return response([
                'error' => 'Invalid credentials',
            ], 422);

        }
        $user = Auth::user();

        if (!$user->is_verified == 1) {
            $otp = $this->generateOTP($user);
            // Mail::to($request->email)->send(new VerifyAccount($otp['token']));

            return response([
                'user' => $user,
            ]);
        }

        /** @var \App\Models\User $user * */
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user'  => $user,
            'token' => $token,
        ]);
    }
}
