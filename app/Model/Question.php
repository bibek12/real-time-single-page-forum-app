<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Model\Reply;
use App\Model\Category;

class Question extends Model
{
    //
    protected $guarded=[];

    public function getRouteKeyName(){
        return 'slug';
    }
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function replies(){
        return $this->hasMany(Reply::class);
    }

    public function categories(){
        return $this->belongsTo(Category::class);
    }

    public function getPathAttribute(){
        return asset("api/quetion/$this->slug");
    }

    public function getCreatedDateAttribute(){
        return $this->created_at->diffForHumans();
    }
}
