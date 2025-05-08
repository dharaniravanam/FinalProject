<template>
    <div :class="(Place.builtOrDiscovered === 'Built') ? 'green' : 'red'">
      <h2>{{ Place.placeName }}</h2>
      <img :src="Place.imageUrl" :alt="`Image of ${Place.placeName}`" class="place-img" />
      <div>
        <p><strong>Location:</strong> {{ Place.location }}</p>
        <p><strong>Category:</strong> {{ Place.category }}</p>
        <p><strong>Description:</strong> {{ Place.description }}</p>
        <p><strong>Best Time to Visit:</strong> {{ Place.bestTimeToVisit }}</p>
        <p><strong>Average Visitors:</strong> {{ Place.averageVisitors }}</p>
        <p><strong>Opening Hours:</strong> {{ Place.openingHours }}</p>
        <p><strong>Type:</strong> {{ Place.builtOrDiscovered }}</p>
      </div>
      <div v-if="Place.nearbyAttractions && Place.nearbyAttractions.length">
        <p><strong>Nearby Attractions:</strong></p>
        <ul>
          <li v-for="(attraction, index) in Place.nearbyAttractions" :key="index">{{ attraction }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EachPlace',
    props: {
      Place: Object
    }
  }
  </script>
  
  <style scoped>
  .green {
    background-color: #3ab5ea;
  }
  
  .red {
    background-color: #408ab4;
  }
  
  .place-img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 0.5em;
  margin-bottom: 1em;
 }

  div {
    background-color: #d1edf2;
    color: black;
    padding: 1em;
    text-align: left;
    width: 80%;
    margin: 1em auto;
    border-radius: 0.5em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    font-style: italic;
    margin-bottom: 0.5em;
    color: rgb(247, 235, 235);
  }
  
  p {
    margin: 0.3em 0;
    font-size: 18px;
  }
  
  ul {
    padding-left: 1.5em;
    margin-top: 0.3em;
  }
  </style>
  