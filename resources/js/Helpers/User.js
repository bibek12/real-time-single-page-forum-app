import Token from './Token';
import AppStorage from './AppStorage';

class User{
    login(data){
        axios.post('/api/auth/login',data)
        .then(res=>{
            this.responseAfterLogin(res)
            this.$router.push({name:'forum'})
        })
            //console.log(res.data);
       .catch(error=>console.log(error.response.data));
    }

    responseAfterLogin(res){
        const access_token=res.data.access_token
       
       
        const username=res.data.user

        if(Token.isValid(access_token)){
            console.log(access_token)
            AppStorage.store(username,access_token);
            window.location='/forum'
        }

    }

    hasToken(){
        const storedToken=AppStorage.getToken();
        if(storedToken){
           return  Token.isValid(storedToken)?true:false
        }

        return false;
    }

    loginIn(){
        return this.hasToken();
    }

    logout(){
        AppStorage.clear();
        window.location='/forum'
    }

    name(){
        if(this.loginIn()){
            return AppStorage.getUser();
        }
        
    }

    id(){
        if(this.loginIn()){
            const payload=Token.payload(AppStorage.getToken())
            return payload.sub
        }
        
    }
    own(id){
        return this.id()==id
    }
    admin(){
        return this.id()==49
    }
}



export default User=new User();