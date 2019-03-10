<template>
    <div>
         <edit-question v-if="editing" :question=question></edit-question>
         <div v-else>
             <show-question :question=question v-if="question"></show-question> 
        </div>
        <v-container>
                 <replies :question="question"></replies>
                <create-reply v-if="loggedIn"  :questionSlug="question.slug"></create-reply>
                <div class="mt-4" v-else>
                    <router-link to="/login">Login to reply</router-link>
                </div>
        </v-container>
       
    </div>
   
</template>

<script>
import ShowQuestion from './ShowQuestion'
import EditQuestion from './editQuestion'
import Replies from '../reply/replies'
import CreateReply from '../reply/createReply' 
export default {
    components:{ShowQuestion,EditQuestion,Replies,CreateReply},
    data(){
        return {
            question:null,
            editing:false
        }
    },
    created(){
       this.listen()
       this.getQuestion()
    },
    methods:{
        listen(){
            EventBus.$on('startEditing',()=>{
                this.editing=true
            })

            EventBus.$on('cancelEditing',()=>{
                this.editing=false
            })
        },
        getQuestion(){
             axios.get(`/api/question/${this.$route.params.slug}`)
            .then(res=>this.question=res.data.data)
        }
    },
    computed:{
        loggedIn(){
            return User.loginIn()
        }
    }
}
</script>

<style>

</style>
