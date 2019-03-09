<template>
    <div>
         <edit-question v-if="editing" :question=question></edit-question>
         <div v-else>
             <show-question :question=question v-if="question"></show-question> 
        </div>
        <replies :question="question"></replies>
        <create-reply :questionSlug="question.slug"></create-reply>
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
    }
}
</script>

<style>

</style>
