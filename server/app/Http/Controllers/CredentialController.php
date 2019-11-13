<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Namshi\JOSE\SimpleJWS;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;

/**
 * Class UserController
 * @package App\Http\Controllers
 *
 * @since 1.0
 * @version 1.0
 * @author HOUNTONDJI Adebayo <hountondjigodwill@gmail.com>
 */
class CredentialController extends Controller
{
    /**
     * Login a user
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public static function login(Request $request)
    {
        // Validate request data
        $validation = Validator::make($request->request->all(), ['email' => 'required', 'password' => 'required']);
        if ($validation->fails()){
            return response()
                ->json([
                    'status' => 'failure',
                    'message' => 'Request meets validation errors',
                    'code' => 2,
                    'error' => $validation->errors()->messages()
                ], 404);
        }

        // Check if email and password match
        $user = User::where('email', $request->request->get('email'))->first();
        if (!$user || !$user->passwordMatches($request->request->get('password'))){
            return response()
                ->json([
                    'status' => 'failure',
                    'message' => 'Request meets validation errors',
                    'code' => 2,
                    'error' => [
                        'global' => 'Adresse email ou mot de passe incorrect.'
                    ]
                ], 404);
        }

        // Return successful response
        $user = $user->toArray();

        $jws  = new SimpleJWS(array('alg' => 'HS256'));

        $jws->setPayload(array(
            'uid' => $user['id'],
            'exp' => Carbon::now()->addHours(2)->format('U'),
            'email' => $user['email'],
            'role' => $user['role'],
        ));

        $jws->sign(getenv('APP_KEY'));

        return response()
            ->json([
                'status' => 'success',
                'code' => 1,
                'result' => [
                    'token' => $jws->getTokenString()
                ]
            ], 200);
    }

}

