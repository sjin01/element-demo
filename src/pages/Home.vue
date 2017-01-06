<template>
  <main-layout>
    <p>Welcome home</p>
    <p>val : {{val}}</p>
    <input type="text" v-model="val">
    <br>
    <button type="button" @click="setval">设置val</button>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    data(){
      return { val:123}
    },
    methods: {
      setval (){
        this.val = '通过 setval 方法设置了值';
      }
    },
    components: {
      MainLayout
    }
  }
</script>
