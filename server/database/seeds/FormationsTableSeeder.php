<?php

use Illuminate\Database\Seeder;

use Carbon\Carbon;


class FormationsTableSeeder extends Seeder
{
    /**
     * List of hetic formations
     *
     * @var array
     */
    const formations = [
        'W1'  => 'Bachelor web première année',
        'W2'  => 'Bachelor web deuxième année',
        'W3'  => 'Bachelor web troisième année',
        'H1'  => 'Grande Ecole première année',
        'H2'  => 'Grande Ecole deuxième année',
        'H3'  => 'Grande Ecole troisième année',
        'H4'  => 'Grande Ecole quatrième année',
        'H5'  => 'Grande Ecole cinquième année',
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (self::formations as $code => $name){
            DB::table('formations')->insert([
                'name' => $name,
                'code' => $code,
                'description' => 'Description de la formation `' . $name . '` d\'Hetic.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
