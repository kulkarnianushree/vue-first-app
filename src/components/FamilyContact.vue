<template>
    <li>
      <h2>{{ name }} {{ Favorite ? 'Favorite' : '' }}</h2>
      <button @click="toggleHandler">{{ showStatus ? 'hide' : 'show' }} Details</button>
      <button @click="toggleFavHandler">Toggle Favorite</button>
      <ul v-if="showStatus">
        <li><strong>Phone:</strong> {{ phoneNumber }}</li>
        <li><strong>Email:</strong> {{ emailAddress }}</li>
      </ul>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      emailAddress: {
        type: String,
        required: true,
      },
      isFavorite: {
        type: Boolean,
        required: false,
        default: false,
        // validator: function (value) {
        //   return value === '1' || value === '0';
        // },
      },
    },
    data() {
      return {
        showStatus: false,
        Favorite: this.isFavorite, 
      };
    },
    methods: {
      toggleHandler() {
        this.showStatus = !this.showStatus;
      },
      toggleFavHandler() {
        this.Favorite = !this.Favorite;  
      },
    },
  };
  </script>
  