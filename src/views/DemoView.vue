<script setup>
  import {ref} from 'vue';
  const visible = ref(true);
</script>

<template>
  <div class="demo">
    <h1>This is a demo page</h1>
    
    <button @click="visible = !visible">Show / Hide</button>

    <p v-show="visible">I'am true FROM V-SHOW</p>
    <p v-if="visible">I'am true</p>
    <p v-else>I'am false</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .demo {
    
    display: grid;
    align-items: center;
  }
}
</style>
