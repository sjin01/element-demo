<template>
  <main-layout>
    <h2>商品列表</h2>

    <el-row class="mb-10">
    <el-button type="primary"  @click="dialogFormVisible = true">添加商品</el-button>
    <el-button @click="loadData">从远程取</el-button>

    </el-row>

    <el-table
            :data="cars"
            stripe
            style="width: 100%">
      <el-table-column
              prop="id"
              label="ID"
              width="">
      </el-table-column>
      <el-table-column
              prop="trademark"
              label="品牌"
              width="180">
      </el-table-column>
      <el-table-column
              prop="name"
              label="车型">
      </el-table-column>
      <el-table-column
              prop="price"
              label="价格">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
                  size="small"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
                  size="small"
                  type="danger"
                  @click="delBook(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
            layout="prev, pager, next"
            :total="1000" @current-change="cPage">
    </el-pagination>

    <!--<table class="car-table">
      <tr v-for="(car, index) in cars">
        <td>{{car.id}}</td>
        <td>{{car.trademark}}</td>
        <td>{{car.name}}</td>
        <td>{{car.price}}</td>
        <td>
          <button type="button" @click="delBook(index)">删除</button>
        </td>

      </tr>
    </table>-->

    <!-- Form -->


    <el-dialog title="添加商品" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="品牌" :label-width="formLabelWidth">
          <el-input v-model="addcar.trademark"></el-input>
        </el-form-item>
        <el-form-item label="型号" :label-width="formLabelWidth">
          <el-input v-model="addcar.name"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="addcar.price"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCar">保存</el-button>
      </div>
    </el-dialog>

    <!--<h2>添加商品</h2>
    <div>
      <div>
        <label>品牌</label>
        <el-input type="text" v-model="addcar.trademark"></el-input>
      </div>
      <div>
        <label>型号</label>
        <el-input type="text" v-model="addcar.name"></el-input>
      </div>
      <div>
        <label>价格</label>
        &lt;!&ndash;<input type="text" v-model="addcar.price">&ndash;&gt;
        <el-input type="text" v-model="addcar.price"></el-input>
      </div>
      <button type="button" @click="addCar">保存</button>
      <button type="button" @click="loadData">从远程取</button>
    </div>-->
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
        dialogFormVisible: false,
        formLabelWidth: '60px',
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
        this.addcar = {id:'',
          name:'',
          trademark:'',
          price:''};
        this.dialogFormVisible = false
      },
      delBook(index, row){
        this.cars.splice(index, 1);
      },

      loadData (){
        this.$http.get('src/json/cars.json').then( function(response) {
          // this.$set('cars', response.data);
          this.cars = this.cars.concat(response.data);
        }).catch(function(response) {
          console.log(response);
        })
      },

      cPage (page){
        console.log(page);
      }



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

  .mb-10{
    margin-bottom: 10px;
  }

</style>
