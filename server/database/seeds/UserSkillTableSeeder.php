<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Skill;
use App\Models\Tool;
use Carbon\Carbon;

class UserSkillTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Add skills for user
        foreach (\App\Models\User::all() as $key => $user){
            // Get random skills
            $skills =  Skill::all()->random(rand(1, 8));
            $notes = ['A', 'B', 'C', 'E', 'F'];
            foreach ($skills as $key => $skill){
                DB::table('user_skill')->insert([
                    'user_id'    => $user->id,
                    'skill_id'   => $skill->id,
                    'note'       => $notes[array_rand($notes, 1)],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }
    }
}
