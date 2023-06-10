<script setup>

  import {ref} from 'vue';
  import TurtleCard from '../components/TurtleCard.vue';

  const tourtlesObj = [
    { id:1, name: 'Leonardo', weapon: 'Katana' },
    { id:2, name: 'Raphael', weapon: 'Sai' },
    { id:3, name: 'Donatello', weapon: 'Jo' },
    { id:4, name: 'Michelangelo', weapon: 'Nunchuk' },
  ];

  const totalCount = ref(0);
  const turtleName = ref('');
  const turtleWeapon = ref('');
  
  const updateCounter = (name, weapon) => {
    totalCount.value++;
    turtleName.value = name;
    turtleWeapon.value = weapon;
  }

</script>

<template>
  <div class="for">
    <h1>V-For Example</h1>
    <p>Total counter: {{ totalCount }}</p>
    <p v-if="turtleName !== '' ">{{ turtleName }} uses {{ turtleWeapon }}</p>
    <section class="cards">
      <TurtleCard v-for="turtle in tourtlesObj" :key="turtle.id" :info="turtle" @response="updateCounter"/>
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