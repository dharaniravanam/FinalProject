// PlaceSet.vue
<template>
 
  

  <div v-for="Place of Places" :key="Place.id">
      <!-- <SingleBook/> -->
      <EachPlace :Place="Place"/>
  </div>
   
</template>

<script>

import EachPlace from './EachPlace.vue'

 

export default {
  name: 'PlaceSet',
  components:{
    EachPlace
  },
  props: {
      Places: Array
  }

}




</script>


<style>


</style>