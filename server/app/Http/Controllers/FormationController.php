<?php

namespace App\Http\Controllers;

use App\Models\User;
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
class FormationController extends Controller
{
    /**
     * Get a list of all formations
     *
     * @param Request $request
     * @return mixed
     */
    public function formations(Request $request)
    {
        if (!Cache::has('app_formation_list')) {
            $formations = DB::table('formations')
                ->select('formations.id', 'formations.name', 'formations.code', 'formations.description')
                ->get();
            Cache::put('app_formation_list', $formations, now()->addMinutes(60 * 24));
        }

        return response()
            ->json([
                'status' => 'success',
                'message' => 'ok',
                'result' => [
                    'users' => Cache::get('app_formation_list'),
                    'total' => count(Cache::get('app_formation_list'))
                ]
            ], 200);
    }
}

