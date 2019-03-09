<template>
    <v-container fluid grid-list-md>
        <v-layout row>
            <v-flex xs8>
                <question 
                v-for="question in questions"
                :key="question.path"
                :question=question>
                </question>
            </v-flex>
            <v-flex xs4>
                  <sidebar></sidebar>
            </v-flex>
         </v-layout>
    </v-container>
</template>

<script>
import question from  './question'
import sidebar from './Sidebar'
export default {
      components:{question,sidebar},
        data(){
            return {
                questions:{}
            }
        },
      created(){
          axios.get('api/question')
          .then(res=>this.questions=res.data.data)
          .catch(error=>console.log(error.response.data))
      }

}
</script>

<style>

</style>
