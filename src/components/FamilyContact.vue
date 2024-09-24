<template>
    <li>
      <h2>{{ name }} {{ isFavorite ? 'Favorite' : '' }}</h2>
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
      id: {
        type: String,
        required: true,
      },
      isFavorite: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    emits:{
        'favorite-status':function(id){
            if(id){
                return true
            }else{
                return false
            }
        }
    },
    data() {
      return {
        showStatus: false,
      };
    },
    methods: {
      toggleHandler() {
        this.showStatus = !this.showStatus;
      },
      toggleFavHandler() {
        this.$emit('favorite-status', this.id); // Emit the event to the parent
      },
    },
  };
  </script>
  