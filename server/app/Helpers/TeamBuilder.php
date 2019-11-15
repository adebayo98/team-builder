<?php

namespace App\Helpers;

use Illuminate\Support\Facades\DB;


class TeamBuilder
{
    /**
     * List of promotions
     *
     * @var array
     */
    private $formations;

    /**
     * The number of users per group
     *
     * @var array|null
     */
    private $userPerTeam = null;

    /**
     * The main skills of Hetic users
     *
     * @var array|null
     */
    private $mainSkillsList = null;

    /**
     * The list of teams.
     *
     * @var array
     */
    private $teams = [];


    /**
     * TeamBuilder constructor.
     *
     * @param array $formations
     * @param int $userPerTeam
     */
    public function __construct(array $formations, int $userPerTeam)
    {
        $this->formations = $formations;
        $this->userPerTeam = $userPerTeam;
        $this->boot();
    }

    private function boot()
    {
        $this->mainSkillsList = DB::select('select distinct name from skills where type = "Job"');
        $this->build();
    }

    private function build()
    {
        $currentGroup = [];

        dump(array_values($this->mainSkillsList));
        die;

        for ($i=1; $i < $this->userPerTeam; $i++){
            $users = DB::table('users')
                ->join('formations', 'formations.id', '=', 'users.formation_id')
                ->join('skills', 'skills.id', '=', 'users.main_skill_id')
                ->select(
                    'users.id as id',
                    'users.last_name',
                    'users.first_name',
                    'users.role',
                    'skills.name as main_skill'
                )
                ->where('formations.code', 'in', $this->formations)
                ->where('users.role', '=', 'student')
                ->get();
        }


    }

    /**
     * Return a list of teams.
     *
     * @return array
     */
    public function getTeams()
    {
        return $this->teams;
    }
}
