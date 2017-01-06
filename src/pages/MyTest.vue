<template>
  <main-layout>
    <p>my test...</p>
    <h1>商品列表</h1>
    <table class="car-table">
      <tr v-for="(car, index) in cars">
        <td>{{car.id}}</td>
        <td>{{car.trademark}}</td>
        <td>{{car.name}}</td>
        <td>{{car.price}}</td>
        <td>
          <button type="button" @click="delBook(index)">删除</button>
        </td>

      </tr>
    </table>
    <h2>添加商品</h2>
    <div>
      <div>
        <label>品牌</label>
        <input type="text" v-model="addcar.trademark">
      </div>
      <div>
        <label>型号</label>
        <input type="text" v-model="addcar.name">
      </div>
      <div>
        <label>价格</label>
        <input type="text" v-model="addcar.price">
      </div>
      <button type="button" @click="addCar">保存</button>
      <button type="button" @click="loadData">从远程取</button>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    mounted: function () {
        this.loadData();
    },
    data(){
      return {
        addcar:{},
        cars:[{
          id:1,
          name:'x1',
          trademark:'宝马',
          price:'300000'
        },{
          id:2,
          name:'x2',
          trademark:'宝马',
          price:'400000'
        },{
          id:3,
          name:'x3',
          trademark:'宝马',
          price:'500000'
        },{
          id:4,
          name:'x4',
          trademark:'宝马',
          price:'800000'
        },{
          id:5,
          name:'x5',
          trademark:'宝马',
          price:'10000000'
        }]
      }
    },
    methods:{
      addCar (){
        this.addcar.id = this.cars.length + 1;
        this.cars.push(this.addcar);
        this.addcar = {};
      },
      delBook(index){
        this.cars.splice(index, 1);
      },

      loadData (){
        this.$http.get('src/json/cars.json').then( function(response) {
          console.log(response);
          // this.$set('cars', response.data);
          this.cars = this.cars.concat(response.data);
        }).catch(function(response) {
          console.log(response);
        })
      },

      /*// $resource 另一个从远程取数据方法
      getCustomers: function() {
        var resource = this.$resource('src/json/cars.json');
        var vm = this;

        resource.get()
          .then((response) => {
            console.log(response.data);
            this.cars = this.cars.concat(response.data);
//            vm.$set('cars', response.data)
          })
          .catch(function(response) {
            console.log(response)
          })
      }*/
    },
    components: {
      MainLayout
    }
  }


</script>
<style>
  .car-table{
    width:100%
  }

</style>
