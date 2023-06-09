<script setup>
  const props = defineProps(['info'])
  console.log(props.info)
</script>

<template>
  <article class="card">
    I'am a turtle!!
    <h2>{{ props.info.name }}</h2>
    <p>{{ props.info.weapon }}</p>
    <button @click="$router.push( { name: 'single', params: {turtleID: props.info.id} })">
        View more ...
    </button>
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
  }
  .card button{
    margin-top: auto;
  }
</style>