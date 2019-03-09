<template>
    <div>
        <markdown-editor v-model="reply.reply"></markdown-editor>
           <v-card-actions>
                <v-btn icon small>
                    <v-icon color="green" @click="update">save</v-icon>
                </v-btn>
                <v-btn icon small @click="cancel">
                    <v-icon color="black">cancel</v-icon>
                </v-btn>
           </v-card-actions>
    </div>
    

</template>

<script>
export default {
    props:['reply'],
    methods:{
        update(){
            axios.put(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`,{body:this.reply.reply})
            .then(res=>this.cancel())
        },
        cancel(){
            EventBus.$emit('cancelReply')
        }
    }

}
</script>

<style>

</style>
