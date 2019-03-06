<template>
  <v-toolbar>
   
    <v-toolbar-title>Forum</v-toolbar-title>
    <v-spacer></v-spacer>
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
export default {
  data(){
    return{
        items:[
          {title:'Forum',to:'/login',show:true},
          {title:'Ask Question',to:'/askquestion',show:User.loginIn()},
          {title:'Category',to:'/category',show:User.loginIn()},
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
