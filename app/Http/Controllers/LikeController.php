<?php

namespace App\Http\Controllers;

use App\Model\Reply;


class LikeController extends Controller
{
       /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT');
    }
    public function likeIt(Reply $reply){
            $reply->likes()->create(['user_id'=>'1']);
    }

    public function dislikeIt(Reply $reply){
        $reply->likes()->where('user_id','1')->first()->delete();
    }
}
