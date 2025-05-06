// app.vue

<template>


  <!-- Step 3: use the component -->

  <MyHeader title="Wonders of the World" Name="Guide to Top Tourist Places"/>
  <PlaceSet :Places="Places"/>
  

</template>

<script>

// Step 1 import the componenet
import MyHeader from './components/MyHeader.vue'
import PlaceSet from './components/PlaceSet.vue'

export default {
  name: 'App',
//Step 2 register the componenta
  components:{
    MyHeader,
    PlaceSet
  },

  data(){
  return {
    Places: []
  }
  },
  methods: {
     async fetchPlace(){
      const res = await fetch("http://localhost:8249/api")
      const data = await res.json()
      console.log(data)
      return data
     }

  },
  async created(){
    this.Places = await this.fetchPlace()
  },

}
  






</script>


<style>


@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
}
.container {
  max-width: 400px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 0.3em solid black;
  padding: 30px;
  border-radius: 5px;
}

div{
  margin-bottom: 0.5em;
  text-align: center;
}


</style>
