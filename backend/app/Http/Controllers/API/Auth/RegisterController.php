<?php

namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
Use App\User;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
    	$user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
    	return response()->json(["message" => "success!", "data" => $user] , 200);
    }
}
