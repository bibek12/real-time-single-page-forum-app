import User from './User.js';

class Exception{
    handle(error){
        this.isExpired(error.res.data.error)
    }

    isExpired(error){
        if(error == 'Token is invalid'){
            User.logout();
        }
    }
}

export default Exception=new Exception()