class AppStorage{

    //store the the currently login token generated to localstorage
    storeToken(token){
        localStorage.setItem('token',token);
    }
    //store the currently login username
    storeUser(user){
        localStorage.setItem('user',user);
    }

    
    store(user,token){
        this.storeToken(token);
        this.storeUser(user);
    }

    //remove the token and user when user logout
    clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    getToken(){
        return localStorage.getItem('token');
    }

    getUser(){
        return localStorage.getItem('user');
    }

   

}

export default AppStorage=new AppStorage();