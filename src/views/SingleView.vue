<script setup>
  const props = defineProps( ['turtleID'] );
</script>

<template>
  <div class="sinnewle">
    <h1>Dynamic View - Demo</h1>
    <p>ID: {{ props.turtleID }}</p>
  </div>
</template>

<style>
.new{
  display: grid;
}
</style>
