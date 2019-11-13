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
        'personal_email',
        'phone',
        'description',
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
     * Get the promotion of user
     */
    public function promotion()
    {
        return $this->hasOne('App\Models\Promotion', 'id', 'promotion_id')->first();
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
