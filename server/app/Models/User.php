<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "users";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'photo_url',
        'last_name',
        'first_name',
        'gender',
        'email',
        'password',
        'personal_email',
        'phone',
        'description',
        'role',
        'updated_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [

    ];

    /**
     * User register rules.
     *
     * @return array
     */
    public static function registerRules()
    {
        return [
            'last_name' =>  'required',
            'first_name' =>  'required',
            'email' =>  'required|email|regex:#@hetic.net$#|unique:users',
            'personal_email' => 'required|email|unique:users',
            'phone' =>  'required',
            'promotion_id' => 'required',
            'formation_id' => 'required',
            'password' => 'required',
        ];
    }

    /**
     * User update rules.
     *
     * @return array
     */
    public static function updateRules()
    {
        return [
            'email' =>  'email|regex:#@hetic.net$#|unique:users',
            'personal_email' => 'email|unique:users',
        ];
    }

    /**
     * The skills that belong to the user.
     */
    public function skills()
    {
        return $this->belongsToMany('App\Models\Skill', 'user_skill', 'user_id', 'skill_id')
            ->withPivot('note')
            ;
    }

    /**
     * Checks whether the specified password matches that of the user model object
     *
     * @param string $password The password to check
     * @return bool
     */
    public function passwordMatches(string $password): bool
    {
        return Hash::check($password, $this->password) ?? false;
    }
}
