import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Logout from '../components/login/Logout'
import Login from '../components/login/Login'
import SignUp from '../components/login/SignUp'
import Forum from '../components/forum/Forum'
import Read from '../components/forum/Read'
import Create from '../components/forum/create'
import CreateCategory from '../components/category/create'

const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/forum', component: Forum,name:'forum' },
    { path: '/question/:slug', component:Read,name:'read' },
    { path: '/askquestion', component:Create},
    { path: '/category', component:CreateCategory},
    {path:'/logout', component:Logout}
  ]

  // 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang:false,
    mode:'history'
  })

 
  export default router