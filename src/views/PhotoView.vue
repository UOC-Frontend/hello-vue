<script setup>
  import { ref, onMounted } from 'vue';
  import api from '../services/services.js';

  const props = defineProps( ['photoID'] );
  const information = ref({});

  onMounted( () => {
    api.getSinglePhoto( props.photoID ).then( response => {
    console.log(response.data);
    information.value = response.data;
  });
  });
</script>

<template>
  <div class="new">
    <h1>This is the Single View Page</h1>
    <p>ID: {{ information.id }}</p>
    <h2>Title: {{ information.title }}</h2>
    <img :src="information.url" alt="photo-demo">
  </div>
</template>

<style>
.new{
  display: grid;
}
</style>
