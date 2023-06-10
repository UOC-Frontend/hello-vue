<script setup>
const props = defineProps(['info']);
</script>

<template>
  <article class="card" :class="props.info.color">
    I'am a photo!!
    <h2>{{ props.info.title }}</h2>
    <img :src="props.info.thumbnailUrl" alt="photo-demo">
    <button @click="$router.push({ name: 'photo', params: {photoID: props.info.id}})">Shor Card</button>
  </article>
</template>

<style scoped>
  .card{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 2px solid #333;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 0 5px 5px #eee;
    width: fit-content;
    min-width: 200px;
    max-width: 250px;
  }
  .card button{
    margin-top: auto;
  }
  .orange{
    box-shadow: 0 0 10px 5px orange;
  }
  .blue{
    box-shadow: 0 0 10px 5px blue;
  }
  .red{
    box-shadow: 0 0 10px 5px red;
  }
  .purple{
    box-shadow: 0 0 10px 5px purple;
  }
  .max{
    background-color: gold;
  }
</style>