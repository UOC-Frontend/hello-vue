<script setup>
  const tourtlesObj = [
    { id:1, name: 'Leonardo', weapon: 'Katana' },
    { id:2, name: 'Raphael', weapon: 'Sai' },
    { id:3, name: 'Donatello', weapon: 'Jo' },
    { id:4, name: 'Michelangelo', weapon: 'Nunchuk' },
  ];
</script>

<template>
  <div class="for">
    <h1>V-For Example</h1>
    <ul>
      <li v-for="turtle in tourtlesObj" :key="turtle.id"
        @click="$router.push( { name: 'single', params: {turtleID: turtle.id} })"
      >
       {{ turtle.id }} : {{ turtle.name }} uses {{ turtle.weapon }}
      </li>
    </ul>
  </div>
</template>

<style>
  .new{
    display: grid;
  }
  li{
    cursor: pointer;
  }
  li:hover{
    color: hsla(160, 100%, 37%, 1);
  }
</style>