<script setup>
import {ref} from 'vue';

  const props = defineProps(['info']);
  const emit = defineEmits(['response']);
  const count = ref(0);
  
  console.log(props.info);

  // ES6
  const increment = () => {
    count.value++;
    emit('response', props.info.name, props.info.weapon);
  }

  // ES5
  // function increment(){
    count.value++;
  // }

</script>

<template>
  <article class="card">
    I'am a turtle!!
    <h2>{{ props.info.name }}</h2>
    <p>{{ props.info.weapon }}</p>
    <button @click="$router.push( { name: 'single', params: {turtleID: props.info.id} })">
        View more ...
    </button>
    <button @click="increment">Counter {{ count }}</button>
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