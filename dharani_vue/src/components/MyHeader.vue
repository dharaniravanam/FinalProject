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
  
  h2 {
    font-size: 30px;
    font-weight: bold; 
  }
  </style>