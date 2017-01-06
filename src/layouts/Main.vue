<template>
  <div class="container">

    <el-row>
      <el-col :span="24">
        <el-menu theme="dark" class="" mode="horizontal" @select="handleSelect">
          <el-menu-item
                  v-for="item in menus"
                  :index="item.q"
                  :class="{ 'is-active' : isActive(item.href) }"
          >{{item.name}}</el-menu-item>

          <!--<el-submenu index="20">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>-->

          <!--<el-menu-item index="30"><v-link href="/">Home</v-link></el-menu-item>
          <el-menu-item index="30"><v-link href="/about">About</v-link></el-menu-item>
          <el-menu-item index="30"><v-link href="/test">my-test</v-link></el-menu-item>-->
        </el-menu>
      </el-col>
    </el-row>

    <slot></slot>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'
  import routes from '../routes'

  export default {
    data () {
      return {
        menus : [
          {q:'1', name:'HOME', href:'/'},
          {q:'2', name:'About', href:'/about'},
          {q:'3', name:'My-Test', href:'/test'}
        ]
      }
    },
    computed: {

    },
    methods: {
      isActive (href) {
        return href === this.$root.currentRoute
      },
      handleSelect(key, keyPath) {
        for(var i =0; i< this.menus.length; i++){
          if(this.menus[i].q == key){
            this.$root.currentRoute = this.menus[i].href
            window.history.pushState(
              null,
              routes[this.menus[i].href],
              this.menus[i].href
            )
          }
        }
      },

    },
    components: {
      VLink
    }
  }
</script>

<style scoped>
  .container {
    max-width: 100%;
    margin: 0 auto;
  }
</style>
