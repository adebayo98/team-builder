<?php

use Illuminate\Database\Seeder;

use Carbon\Carbon;

class SkillsTableSeeder extends Seeder
{
    /**
     * List of skills of the app.
     *
     * @var array
     */
    const skills = [
        'Développeur front' => array(
            ['css', 'technology', 'Technologie cliente pour stylisé des pages web', 5],
            ['sass', 'preprocessor', 'Préprocesseur css', 10],
            ['less', 'preprocessor', 'Préprocesseur css', 8],
            ['webpack', 'library', 'Js module bundle', 10],
            ['html', 'technology', 'Technologie cliente pour écrire/formater des pages web', 5],
            ['js', 'technology', 'Technologie cliente pour interagir aves des utilisateurs sur une page web', 8],
            ['jquery', 'library', 'Framework front-end developpé par facebook pour construire des sites web.', 2],
            ['react js', 'framework', 'Framework front-end open source developpé par facebook pour construire des sites web.', 10],
            ['vue js', 'framework', 'Framework front-end open source pour construire des sites web.', 10],
            ['angular js', 'framework', 'Framework front-end open source developpé par google pour construire des sites web.', 10],
        ),
        'Développeur Back' => array(
            ['php', 'technology', 'Technologie serveur pour creer des sites webs dynamiques.', 8],
            ['laravel','framework', 'Technologie serveur pour creer des sites webs dynamiques avec php.', 10],
            ['symfony','framework', 'Technologie serveur pour creer des sites webs dynamiques avec php.', 8],
            ['node js','technology', 'Technologie serveur pour creer des sites webs dynamiques.', 10],
            ['express','framework', 'Technologie serveur pour creer des sites webs dynamiques avec node js.', 8],
            ['socket.io','framework', 'Technologie serveur pour creer des sites webs dynamiques avec node js.', 8],
        ),
        'Développeur mobile' => array(
            ['react natif', 'technology', 'Technologie pour creer des applications mobiles en js', 10],
            ['ionic', 'technology', 'Technologie pour creer des applications mobiles en js', 6],
            ['swift', 'technology', 'Technologie pour creer des applications mobiles sur apple uniquement', 7],
            ['kotlin', 'technology', 'Technologie pour creer des applications mobiles sur android uniquement', 7],
        ),
        'Designer' => array(
            ['figma', 'software', 'Logicel pour realiser des maquettes', 10],
            ['sketch', 'software', 'Logicel pour realiser des maquettes', 8],
            ['photoshop', 'software', 'Logicel pour realiser des maquettes', 6],
        ),
        'Devops' => array(
            ['apache', 'web_server','Serveur web', 8],
            ['nginx', 'web_server','Serveur web', 10],
            ['linux', 'operating_system', 'Système d\'exploitation open source', 10],
            ['debian', 'operating_system', 'Système d\'exploitation open source', 10],
            ['ubuntu', 'operating_system', 'Système d\'exploitation open source', 10],
            ['windows', 'operating_system', 'Système d\'exploitation', 10],
            ['docker', 'container', 'Conteneur', 10],
        ),
        'Chef de projet' => array(
            ['Trello', 'web_service', 'Gestion de ticket', 10],
            ['Slack', 'web_service', 'Gestion de projet', 10],
        ),
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (self::skills as $skill => $skillTools){
            // Create skill
            $newSkillId = DB::table('skills')->insertGetId([
                'name'        => $skill,
                'description' => 'La compétence `' . $skill . '` à Hetic.',
                'rating'      => rand(1, 10),
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now(),
            ]);
            // Create skill's tools
            /*foreach ($skillTools as $tool){
                DB::table('tools')->insert([
                    'logo'        => '',
                    'name'        => $tool[0],
                    'skill_id'    => $newSkillId,
                    'type'        => $tool[1],
                    'description' => $tool[2],
                    'rating'      => $tool[3],
                    'created_at'  => Carbon::now(),
                    'updated_at'  => Carbon::now(),
                ]);
            }*/
        }
    }
}
