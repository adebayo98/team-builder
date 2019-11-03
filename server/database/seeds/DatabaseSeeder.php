<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call([
             PromotionsTableSeeder::class,
             FormationsTableSeeder::class,
             UsersTableSeeder::class,
             SkillsTableSeeder::class,
             ToolsTableSeeder::class,
         ]);
    }
}
