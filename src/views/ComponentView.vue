<script setup>
  import TurtleCard from '../components/TurtleCard.vue';

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
    <section class="cards">
      <TurtleCard v-for="turtle in tourtlesObj" :key="turtle.id" :info="turtle"/>
    </section>

    
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
  .cards{
    display: flex;
    gap: 2rem;
  }
</style>