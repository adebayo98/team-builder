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
class UserController extends Controller
{
    /**
     * Get a list of users
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function users(Request $request)
    {
        $promotions = $request->query->get('promotions', false);
        $skills = $request->query->get('skills', false);

        $users = DB::table('users')
            ->join('formations', 'formations.id', '=', 'users.formation_id')
            ->join('promotions', 'promotions.id', '=', 'users.promotion_id')
            ->select('users.id as id','users.photo_url', 'users.last_name', 'users.first_name', 'formations.code as formation', 'promotions.name as promotion')
            ->when($promotions, function ($query, $promotions) {
                return $query->whereIn('formations.code', $promotions);
            })
            ->when($skills, function ($query, $skills) {
                foreach ($skills as $key => $skill){
                    $this->skill = $skill;
                    $query->whereExists(function ($query) {
                        $query->select(DB::raw(1))
                            ->from('user_skill')
                            ->join('skills', function ($join) {
                                $join->on('user_skill.skill_id', '=', 'skills.id')
                                    ->where('skills.name', '=', $this->skill);
                            });
                    });
                }
                return $query;
            })
            ->orderBy('users.first_name', 'asc')
            ->get();

        dump($users);
        die;

        // Check if cache exist
//        if (!Cache::has('app_user_list')){
//            $users = DB::table('users')
//                ->join('formations', 'formations.id', '=', 'users.formation_id')
//                ->join('promotions', 'promotions.id', '=', 'users.promotion_id')
//                ->select('users.photo_url', 'users.last_name', 'users.first_name', 'formations.code as formation', 'promotions.name as promotion')
//                ->orderBy('users.first_name', 'asc')
//                ->get();
//            Cache::put('app_user_list', $users, now()->addMinutes(10));
//        }
        // Return response
        return response()
            ->json([
                'status' => 'success',
                'message' => 'ok',
                'result' => [
                    'users' => $users, //Cache::get('app_user_list'),
                    // 'count' => count(Cache::get('app_user_list')),
                ]
            ], 200);
    }

    /**
     * Get an user
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function user(int $id)
    {
        $user = User::find($id);

        if (!$user){
            return response()
                ->json([
                    'status' => 'failure',
                    'code' => 'not_found',
                    'message' => 'User with id ' . $id . ' not found.',
                ], 404);
        }

        return response()
            ->json([
                'status' => 'success',
                'message' => 'ok',
                'result' => [
                    'user' => $user,
                ]
            ], 200);
    }
}
