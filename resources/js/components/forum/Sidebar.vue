<template>
   <v-card>
        <v-toolbar color="cyan" dark dense>
            <v-toolbar-tile>Categories</v-toolbar-tile>
              
        </v-toolbar>
          <v-list>
              <v-list-tile v-for="category in categories" :key="category.id">
                  <v-list-tile-content>
                      <v-list-tile-title>{{category.name}}</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
          </v-list>
   </v-card>
</template>

<script>
export default {
    props:['question'],
    data(){
        return{
            categories:{}
        }
    },
    created(){
        axios.get('/api/category')
        .then(res=>this.categories=res.data.data)
    }

}
</script>

<style>

</style>
