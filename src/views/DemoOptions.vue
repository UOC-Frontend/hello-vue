<script>

import HelloWorld from '../components/HelloWorld.vue';

export default {
  // instanciar componentes que utiliza el template importados anteriormente
  components:{
    HelloWorld
  },

  // Constantes y varialbes sobre las que trabajar con los templates
  data(){
    return {
      tnmt:[
        { id:1, name: 'Leonardo', weapon: 'Katana' },
        { id:2, name: 'Raphael', weapon: 'Sai' },
        { id:3, name: 'Donatello', weapon: 'Jo' },
        { id:4, name: 'Michelangelo', weapon: 'Nunchuk' },
      ],
      visible: true,
      inc: 0,
      word: 'Hola',
      count: 0,
    }
  },
  
  // Funciones propias hechas a medida que se puedan ncesitar
  methods: {
    increment(){
      this.count++;
    },
    reverse(){
      let temp = this.word.split('');
      temp.reverse();
      this.word = temp.join('');
    }
  },
  mounted(){
    console.log('Yujuuuuuu, The component is now mounted!!! FROM *** Demo Options ***');
  }
}
</script>

<template>
  <div class="new">
    <button @click="visible = !visible">Toogle</button>
    <button @click="inc++">Inc {{ inc }}</button>
    <button @click="increment">Count {{ count }}</button>
    <button @click="reverse">Reverse {{ word }}</button>

    <h1 v-if="visible">This is our new Page</h1>
    <h2 :class="{ 'is-green' : visible }">This is our subtitle</h2>
    <HelloWorld msg="You did it again!!"/>
    <ul>
      <li v-for="turtle in tnmt" :key="turtle.id">{{ turtle.name }}</li>
    </ul>
  </div>
</template>
..
<style>
  .is-green{
    color: lime;
  }
  .new{
    display: grid;
  }
</style>