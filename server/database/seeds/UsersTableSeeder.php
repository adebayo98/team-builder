<?php

use Illuminate\Database\Seeder;

use Carbon\Carbon;

class UsersTableSeeder extends Seeder
{
    /**
     * @var \Faker\Generator
     */
    private $faker;

    /**
     * List of roles.
     *
     * @var array
     */
    const roles = [
        'user',
        'student',
        'speaker',
        'admin',
    ];

    /**
     * UsersTableSeeder constructor.
     */
    public function __construct()
    {
        $this->faker = Faker\Factory::create('fr_FR');
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i < 2500; $i++){
            $user = $this->user();
            DB::table('users')->insert([
                'photo_url'      => '',
                'last_name'      => $user->last_name,
                'first_name'     => $user->first_name,
                'gender'         => $user->gender,
                'email'          => $user->first_name . '.' . $user->last_name . '@hetic.net',
                'personal_email' => $user->first_name . '.' . $user->last_name . '@gmail.com',
                'phone'          => $this->faker->phoneNumber,
                'password'       => bcrypt('password'),
                'description'    => $this->faker->realText($this->faker->numberBetween(50,150)),
                'role'           => $this->faker->randomElement(self::roles, rand(1, 4)),
                'is_activated'   => $this->faker->boolean(80),
                'promotion_id'   => DB::table('promotions')->inRandomOrder()->first()->id,
                'formation_id'   => DB::table('formations')->inRandomOrder()->first()->id,
                'created_at'     => Carbon::now(),
                'updated_at'     => Carbon::now(),
            ]);
        }
    }

    private function user()
    {
        $gender = $this->faker->randomElement(['female', 'male']);
        return (object) [
            'last_name'  => $this->faker->lastName,
            'first_name' => $this->faker->firstName($gender),
            'gender'     => $gender,
        ];
    }
}
