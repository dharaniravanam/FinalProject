// MyHeader.vue
<template>


    <h2> {{ title }}</h2>
    <h2> {{ Name }}</h2>
  </template>
  
  <script>
  
  
   
  
  export default {
    name: 'MyHeader',
    props: {
        title: String,
        Name: String
    }
    
  }
  
  
  
  
  </script>
  
  
  <style>
  
  
  </style>