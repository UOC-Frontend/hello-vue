<script setup>
  const props = defineProps( ['photoID'] );
</script>

<template>
  <div class="sinnewle">
    <h1>Dynamic View - Demo</h1>
    <p>ID: {{ props.photoID }}</p>
  </div>
</template>

<style>
.new{
  display: grid;
}
</style>
