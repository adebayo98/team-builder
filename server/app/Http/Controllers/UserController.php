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
     * Get a users skills
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function userSkills(int $id)
    {
        $skills = User::find($id)->skills()->get();
        return response()
            ->json([
                'status' => 'success',
                'code' => '1',
                'result' => [
                    'skills' => $skills->toArray()
                ]
            ], 200);
    }

    /**
     * Filter users
     *
     * @param Request $request
     * @return mixed
     */
    public function usersFilter(Request $request)
    {
        $promotions = $request->query->get('promotions', false);
        $formations = $request->query->get('formations', false);
        $skills = $request->query->get('skills', false);
        $role = $request->query->get('role', false);

        $users = DB::table('users')
            ->join('formations', 'formations.id', '=', 'users.formation_id')
            ->join('promotions', 'promotions.id', '=', 'users.promotion_id')
            ->select('users.id','users.photo_url', 'users.role', 'users.last_name', 'users.first_name', 'formations.code as formation', 'promotions.name as promotion')
            ->when($promotions, function ($query, $promotions) {
                return $query->whereIn('promotions.id', $promotions);
            })
            ->when($formations, function ($query, $formations){
                return $query->whereIn('formations.id', $formations);
            })
            ->when($skills, function ($query, $skills) {
                $GLOBALS['skills'] = $skills;
                return $query->whereExists(function ($query) {
                    $query->whereExists(function ($query) {
                        $query->select(DB::raw(1))
                            ->from('user_skill')
                            ->whereRaw('user_skill.user_id = users.id AND user_skill.skill_id IN (' . implode(',', $GLOBALS['skills']) . ')');
                    });
                });
            })
            ->when($role, function ($query, $role){
                return $query->whereIn('users.role', '=', $role);
            })
            ->inRandomOrder()
                // ->orderBy('users.first_name', 'asc')
            ->get();

        // Return response
        return response()
            ->json([
                'status' => 'success',
                'code' => '1',
                'result' => [
                    'users' => $users,
                    'total' => count($users)
                ]
            ], 200);
    }

    /**
     * Get all users
     *
     * @return mixed
     */
    public function users()
    {
        if (!Cache::has('app_user_list')){
            $users = DB::table('users')
                ->join('formations', 'formations.id', '=', 'users.formation_id')
                ->join('promotions', 'promotions.id', '=', 'users.promotion_id')
                ->select('users.id as id','users.photo_url', 'users.role', 'users.last_name', 'users.first_name', 'formations.code as formation', 'promotions.name as promotion')
                ->inRandomOrder()
                // ->orderBy('users.first_name', 'asc')
                ->get();
            Cache::put('app_user_list', $users, now()->addMinutes(60 * 24));
        }

        return response()
            ->json([
                'status' => 'success',
                'code' => '1',
                'result' => [
                    'users' => Cache::get('app_user_list'),
                    'total' => count(Cache::get('app_user_list'))
                ]
            ], 200);
    }

    /**
     * Get user random list.
     *
     * @param int $limit
     * @return mixed
     */
    public function usersRandom(int $limit)
    {
        $users = DB::table('users')
            ->join('formations', 'formations.id', '=', 'users.formation_id')
            ->join('promotions', 'promotions.id', '=', 'users.promotion_id')
            ->select('users.id as id','users.photo_url', 'users.role', 'users.last_name', 'users.first_name', 'formations.code as formation', 'promotions.name as promotion')
            ->inRandomOrder()
            ->limit($limit)
            ->get();

        return response()
            ->json([
                'status' => 'success',
                'code' => '1',
                'result' => [
                    'users' => $users
                ]
            ], 200);
    }

    /**
     * Get an user
     *
     * @param int $id
     * @return mixed
     */
    public function user(int $id)
    {
        $user =  DB::table('users')
            ->join('formations', 'formations.id', '=', 'users.formation_id')
            ->join('promotions', 'promotions.id', '=', 'users.promotion_id')
            ->select(
                'users.id',
                'users.photo_url',
                'users.last_name',
                'users.first_name',
                'users.gender',
                'users.phone',
                'users.email',
                'users.personal_email',
                'users.description',
                'users.role',
                'formations.code as formation',
                'promotions.name as promotion'
            )
            ->where('users.id', $id)
            ->first();

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
                'code' => '1',
                'result' => [
                    'user' => $user,
                ]
            ], 200);
    }

}

