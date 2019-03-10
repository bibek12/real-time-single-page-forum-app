<template>
  <v-toolbar color="indigo" dark>
   <v-toolbar-title>
     <router-link class="white--text" to="/">Forum</router-link>
   </v-toolbar-title>
    <v-spacer></v-spacer>
     <app-notification v-if="loggedIn"></app-notification>
   
    <div class="hidden-sm-and-down">
      <router-link v-for="item in items.filter(item=>item.show)"
      :key="item.title"
      :to="item.to"
      >
        <v-btn flat>{{item.title}}</v-btn>
      </router-link>
      
      
       
    </div>
  </v-toolbar>
</template>

<script>
import AppNotification from './AppNotification'
export default {
  components:{AppNotification},
  data(){
    return{
        loggedIn:User.loginIn(),
        items:[
          {title:'Forum',to:'/login',show:true},
          {title:'Ask Question',to:'/askquestion',show:User.loginIn()},
          {title:'Category',to:'/category',show:User.admin()},
          {title:'Login',to:'/login',show:!User.loginIn()},
          {title:'Logout',to:'logout',show:User.loginIn()}
        ]
    }
  },
  created(){
    EventBus.$on('logout',()=>{
        User.logout()
    })
  }
        
}
</script>

<style>

</style>
