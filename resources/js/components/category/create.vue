<template>
    <v-container>
        <v-form @submit.prevent="create">
         
            <v-text-field v-model="form.name"  type="text" 
            label="category" required autocomplete="off">
            </v-text-field>
            <v-btn color="green" type="submit"  :disabled="disabled" v-if="editSlug">Update</v-btn>
             <v-btn color="green" type="submit" :disabled="disabled"  v-else>Create</v-btn>
        </v-form>
         <v-card>
        <v-toolbar color="cyan" dark dense>
            <v-toolbar-tile>Categories</v-toolbar-tile>
              
        </v-toolbar>
        <v-list>
            <div v-for="(category,index) in categories" :key="category.id">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{category.name}}
                        </v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon small @click="edit(index)">
                            <v-icon color="orange">edit</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                    <v-list-tile-action>
                        <v-btn icon small @click="destroy(category.slug,index)">
                            <v-icon color="red">delete</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
                <v-divider></v-divider>
             </div>
        </v-list>
        
   </v-card>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            form:{
                name:null,
            }, 
             categories:{},
             editSlug:null,
             errors:{}
        }
       
            
    },
    methods:{
        create(){
            this.editSlug?this.update():this.creates()
            
        },
        creates(){
            axios.post('/api/category',this.form)
            .then(res=>{
                this.categories.unshift(res.data)
                this.form.name=null
            })
        },
        update(slug){
            axios.patch(`api/category/${this.editSlug}`,this.form)
            .then(res=>{
                this.categories.unshift(res.data)
                this.form.name=null
            })
        },
        destroy(slug,index){
            axios.delete(`/api/category/${slug}`)
            .then(res=>this.categories.splice(index,1))
        },
        edit(index){
            this.form.name=this.categories[index].name
            this.editSlug=this.categories[index].slug
            this.categories.splice(index,1)
        }
    },
    created(){
        if(!User.admin()){
            this.$router.push('/forum')
        }
        axios.get('/api/category')
        .then(res=>this.categories=res.data.data)
    },
    computed:{
        disabled(){
            return !(this.form.name)
        }
    }
   
}
</script>

<style>

</style>
