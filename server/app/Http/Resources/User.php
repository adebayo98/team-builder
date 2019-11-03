<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'photo_url' => $this->photo_url,
            'last_name' => $this->last_name,
            'first_name' => $this->first_name,
            'promotion' => $this->promotion()->name
        ];
    }
}
