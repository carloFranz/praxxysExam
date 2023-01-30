<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{

    public function register(Request $request)
    {

        $request->validate([
            'name' => ['required','string'],
            'username' => ['required', 'string', 'unique:users'],
            'password' =>['required', 'min:6', 'confirmed']
        ]);

        return User::create([
            'name' => $request->name,
            'username' => $request->username,
            'password' => Hash::make($request->password)
        ]);
    }
}