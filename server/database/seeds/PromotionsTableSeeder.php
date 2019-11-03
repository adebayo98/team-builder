<?php

use Illuminate\Database\Seeder;

use Carbon\Carbon;


class PromotionsTableSeeder extends Seeder
{
    /**
     * Year of creation of `Hétic`
     *
     * @var integer
     */
    const heticCreationYear = 2001;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $lastPromotionYear = date('Y');
        for ($i = self::heticCreationYear; $lastPromotionYear - $i > 0; $i++){
            DB::table('promotions')->insert([
                'name' => 'P' . ($i + 2) ,
                'description' => 'La promotion qui obtiendra ça certification en ' . ($i + 2),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
