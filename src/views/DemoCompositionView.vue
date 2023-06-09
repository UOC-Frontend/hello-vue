<script setup>
  // El atributo setup es necesario para poder trabajar con composición
  import HelloWorld from '../components/HelloWorld.vue';
  import { ref } from 'vue';
  import { onMounted } from 'vue';

  // Constantes y Variables con las que trabjar en el template
  const tnmt = [
    { id:1, name: 'Leonardo', weapon: 'Katana' },
    { id:2, name: 'Raphael', weapon: 'Sai' },
    { id:3, name: 'Donatello', weapon: 'Jo' },
    { id:4, name: 'Michelangelo', weapon: 'Nunchuk' },
  ]

  let visible = ref(true);
  let inc = ref(0);
  let word = ref('Hola');
  let count = ref(0);

  // Funciones propias hechas a medida que se puedan necesitar
  const reverse = () => {
    let temp = word.value.split('');
    temp.reverse();
    word.value = temp.join('');
  }

  const increment = () => count.value++;

  onMounted( () => {
    console.log('Yujuuu ... The component is now mounted!!!');
  })
</script>

<template>
  <div class="new">
    <button @click="visible = !visible">Toogle</button>
    <button @click="inc++">Inc {{ inc }}</button>
    <button @click="increment">Count with function {{ count }}</button>
    <button @click="reverse">Reverse {{ word }}</button>

    <h1 v-if="visible">This is our new Page</h1>
    <h2 :class="{ 'is-green' : visible }">This is our subtitle</h2>
    <HelloWorld msg="You did it again!!"/>
    <ul>
      <li v-for="turtle in tnmt" :key="turtle.id">{{ turtle.name }}</li>
    </ul>
  </div>
</template>

<style>
  .is-green{
    color: lime;
  }
  .new{
    display: grid;
  }
</style>