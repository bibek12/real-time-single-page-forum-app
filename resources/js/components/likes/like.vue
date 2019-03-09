<template>
    <div>
        <v-btn icon @click="likeIt">
            <v-icon :color="color">favorite</v-icon>{{count}}
        </v-btn>
    </div>
</template>

<script>
export default {
    props:['content'],
    data(){
        return{
            liked:this.content.liked,
            count:this.content.like_count
            
        }
    },
    created(){
            Echo.channel('likeChannel')
            .listen('LikeEvent', (e) => {
            if(this.content.id==e.id){
                e.type==1?this.count++:this.count--
            }
    });
    },
    computed:{
        color(){
            return this.liked ? 'red':'red lighten-4'
        }
    },
    methods:{
        likeIt(){
            if(User.loginIn()){
                this.liked?this.unlike():this.like()
                this.liked=!this.liked
            }
         },
        like(){
            axios.post(`/api/like/${this.content.id}`)
            .then(res=>this.count++)
        
        },
        unlike(){
             axios.delete(`/api/like/${this.content.id}`)
            .then(res=>this.count--)
        }
    }
}
</script>

<style>

</style>
