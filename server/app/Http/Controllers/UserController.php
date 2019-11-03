<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

/**
 * Class UserController
 * @package App\Http\Controllers
 *
 * @since 1.0
 * @version 1.0
 * @author HOUNTONDJI Adebayo <hountondjigodwill@gmail.com>
 */
class UserController extends Controller
{
    /**
     * Get a list of users
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function users()
    {
        // Check if cache exist
        if (!Cache::has('app_user_list')){
            $users = DB::table('users')
                ->join('formations', 'formations.id', '=', 'users.formation_id')
                ->select('users.photo_url', 'users.last_name', 'users.first_name', 'formations.code as formation')
                ->orderBy('users.first_name', 'asc')
                ->get();
            Cache::put('app_user_list', $users, now()->addMinutes(10));
        }
        // Return response
        return response()
            ->json([
                'status' => 'success',
                'message' => 'ok',
                'result' => [
                    'users' => Cache::get('app_user_list'),
                    'count' => count(Cache::get('app_user_list')),
                ]
            ], 200);
    }
}
