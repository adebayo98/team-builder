<?php

namespace App\Http\Middleware;

use Closure;

/**
 * Cors Middleware Class
 * @package App\Http\Middleware
 *
 * @since 1.0
 * @version 1.0
 * @author Adebayo H. <hountondjigodwill@gmail.com>
 */
class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
            ->header('Vary', 'Origin')
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Authorization, Origin, Accept-Language')
            ->header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, PATCH, DELETE')
            ;
    }
}
