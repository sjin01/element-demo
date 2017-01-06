

<template>
    <div id="app" class="app">
        <el-row>
            <el-col :span="24">
                <el-menu theme="dark" default-active="1" class="" mode="horizontal" @select="handleSelect">
                    <el-menu-item v-for="item in menus" :index="item.q">{{item.name}}</el-menu-item>
                    <el-submenu index="20">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="30">订单管理</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="6">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="18">2</el-col>
        </el-row>


        <h1>{{ msg }}</h1>
        <el-button @click.native="startHacking">Let's do it</el-button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!',
      menus : [
        {q:'1', name:'顶部菜单一'},
        {q:'2', name:'顶部菜单二'},
        {q:'3', name:'顶部菜单三'},
        {q:'4', name:'顶部菜单四'}
      ]
    }
  },



  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(){
    },
    handleClose(){
    }
  }
}
</script>

<style>
body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.app{
width:100%
}
</style>
