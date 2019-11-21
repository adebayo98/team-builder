<?php

namespace App\Http\Controllers;

use App\Helpers\TeamBuilder;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;


/**
 * Class GroupController
 * @package App\Http\Controllers
 *
 * @since 1.0
 * @version 1.0
 * @author HOUNTONDJI Adebayo <hountondjigodwill@gmail.com>
 */
class GroupController extends Controller
{
    /**
     * Build a team
     *
     * @param string $formation
     * @param int $userPerTeam
     */
    public function build(string $formation, int $userPerTeam)
    {

        $teamBuilder = new TeamBuilder([$formation], $userPerTeam);

    }
}

