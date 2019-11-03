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
        // Get random skills
        $skills =  Skill::all()->random(rand(1, count(SkillsTableSeeder::skills)));
        // Add skills for user
        foreach (\App\Models\User::all() as $key => $user){
            foreach ($skills as $key => $skill){
                DB::table('user_skill')->insert([
                    'user_id'    => $user->id,
                    'skill_id'   => $skill->id,
                    'note'       => rand(1, 10),
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
                $tools = Tool::all()
                    ->where('skill_id', $skill->id)
                    ->random(rand(1, Tool::all()->where('skill_id', $skill->id)->count() ));
                foreach ($tools as $key => $tool){
                    DB::table('user_tool')->insert([
                        'user_id'    => $user->id,
                        'tool_id'   => $tool->id,
                        'note'       => rand(1, 10),
                        'created_at' => Carbon::now(),
                        'updated_at' => Carbon::now(),
                    ]);
                }
            }
        }
    }
}
