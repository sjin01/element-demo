<template>
  <main-layout>
    <p>About page</p>
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    data () {
      return {
        msg: 'Use Vue 2.0 Today!'
      }
    },
    methods: {
      startHacking () {
        this.$notify({
          title: 'It Works',
          message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
          duration: 6000
        })
      }
    },
    components: {
      MainLayout
    }
  }
</script>