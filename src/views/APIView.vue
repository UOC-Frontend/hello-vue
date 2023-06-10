<script setup>

  import { ref, onMounted } from 'vue';
  import PhotoCard from '../components/PhotoCard.vue';
  import api from '../services/services';
  
  const photos = ref([]);

  onMounted( () => {
    api.getPhotos().then( response => {
    console.log(response.data);
    photos.value = response.data;
  });
  })

 

</script>

<template>
  <div class="for">
    <h1>API Example</h1>
    <section class="cards">
      <PhotoCard v-for="photo in photos" :key="photo.id" :info="photo"/>
    </section>
  </div>
</template>

<style>
  .new {
    display: grid;
  }
  li {
    cursor: pointer;
  }
  li:hover {
    color: hsla(160, 100%, 37%, 1);
  }
  .cards {
    display: flex;
    gap: 2rem;
    max-width: 50vw;
    flex-wrap: wrap;
  }
</style>