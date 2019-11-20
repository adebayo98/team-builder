<?php

namespace App\Http\Controllers;

use App\Models\User;
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
class UserController extends Controller
{

    public function searchUser(string $searchValue)
    {
        $searchValue = '%' . $searchValue . '%';
        $users = DB::table('users')
            ->where('last_name', 'like', $searchValue)
            ->orWhere('first_name', 'like', $searchValue)
            ->get();

        return response()
            ->json([
                'status' => 'success',
                'message' => 'ok',
                'result' => [
                    'users' => $users,
                    'total' => count($users)
                ]
            ], 404);
    }

    /**
     * Distinct list of user roles
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function rolesList()
    {
        if (!Cache::has('app_roles_list')) {
            $types = DB::select('SELECT DISTINCT role FROM users');
            Cache::put('app_roles_list', $types, now()->addMinutes(60 * 24));
        }

        return response()
            ->json([
                'status' => 'success',
                'message' => 'ok',
                'result' => [
                    'skill_types' => Cache::get('app_roles_list'),
                    'total' => count(Cache::get('app_roles_list'))
                ]
            ], 200);
    }

    /**
     * Register new user
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        // Validate request data
        $validation = Validator::make($request->request->all(), User::registerRules());
        if ($validation->fails()){
            return response()
                ->json([
                    'status' => 'failure',
                    'message' => 'Request meets validation errors',
                    'code' => 2,
                    'error' => $validation->errors()->messages()
                ], 400);
        }

        // Create user
        $request->request->set('role', 'student');
        $request->request->set('password', bcrypt($request->request->get('password')));
        $user = User::create($request->request->all());

        // Return successful response
        return response()
            ->json([
                'status' => 'success',
                'code' => '1',
                'result' => [
                    'user' => $user
                ]
            ], 200);
    }

    /**
     * Edit an user.
     *
     * @param $id
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id, Request $request)
    {
        $request->request->remove('email');
        User::where('id', $id)->update($request->request->all());
        // Return successful response
        return response()
            ->json([
                'status' => 'success',
                'code' => '1',
                'result' => [
                    'user' => User::find($id)
                ]
            ], 200);
    }

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
                ->join('skills', 'skills.id', '=', 'users.main_skill_id')
                ->select('users.id as id','users.photo_url', 'users.last_name', 'users.first_name', 'users.role', 'skills.name as main_skill', 'formations.code as formation', 'promotions.name as promotion')
                ->inRandomOrder()
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
            ->join('skills', 'skills.id', '=', 'users.main_skill_id')
            ->select('users.id as id','users.photo_url', 'users.role', 'users.last_name', 'users.first_name', 'skills.name as main_skill', 'formations.code as formation', 'promotions.name as promotion')
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
            ->join('skills', 'skills.id', '=', 'users.main_skill_id')
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
                'skills.name as main_skill',
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

    /**
     * Create or update an user skills
     *
     * @param $userId
     * @param $skillID
     * @param $note
     * @return \Illuminate\Http\JsonResponse
     */
    public function addUserSkills($userId, $skillID, $note)
    {
        // Check if skills exist
        $skill = DB::table('user_skill')
            ->where('user_id', $userId)
            ->where('skill_id', $skillID)
            ->first();

        if ($skill){
            DB::table('user_skill')
                ->where('user_id', $userId)
                ->where('skill_id', $skillID)
                ->update(['note' => $note]);
        }else{
            DB::table('user_skill')
                ->insert([
                    'user_id' => $userId,
                    'skill_id' => $skillID,
                    'note' => $note
                ]);
        }

        return response()
            ->json([
                'status' => 'success',
                'code' => '1',
                'result' => [
                    'skills' => User::find($userId)->skills()->get()->toArray()
                ]
            ], 200);
    }

    /**
     * Delete an user skills
     *
     * @param $userId
     * @param $skillID
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteUserSkills($userId, $skillID)
    {
        DB::table('user_skill')
            ->where('user_id', $userId)
            ->where('skill_id', $skillID)
            ->delete();

        return response()
            ->json([
                'status' => 'success',
                'code' => '1',
                'result' => [
                    'skills' => User::find($userId)->skills()->get()->toArray()
                ]
            ], 200);
    }

}

