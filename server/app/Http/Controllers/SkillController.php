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
class SkillController extends Controller
{
    /**
     * Get a list of all skills
     *
     * @param Request $request
     * @return mixed
     */
    public function skills(Request $request)
    {
        if (!Cache::has('app_skill_list')) {
            $skills = DB::table('skills')
                ->select('skills.id', 'skills.icon', 'skills.name', 'skills.type', 'skills.description')
                ->get();
            Cache::put('app_skill_list', $skills, now()->addMinutes(60 * 24));
        }

        return response()
            ->json([
                'status' => 'success',
                'message' => 'ok',
                'result' => [
                    'users' => Cache::get('app_skill_list'),
                    'total' => count(Cache::get('app_skill_list'))
                ]
            ], 200);
    }

    /**
     * Get type of skills
     *
     * @return mixed
     */
    public function skillTypes()
    {
        if (!Cache::has('app_skill_types_list')) {
            $types = DB::select('SELECT DISTINCT type as name FROM skills');
            Cache::put('app_skill_types_list', $types, now()->addMinutes(60 * 24));
        }

        return response()
            ->json([
                'status' => 'success',
                'message' => 'ok',
                'result' => [
                    'skill_types' => Cache::get('app_skill_types_list'),
                    'total' => count(Cache::get('app_skill_types_list'))
                ]
            ], 200);

    }
}

