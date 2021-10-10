<template>
  <div id="app">
    <pizzacreate :meat="meat" :vegetables="vegetables" :cheese="cheese" :price="price"/>
  </div>
</template>

<script>
  import pizzacreate from './components/pizzacreate.vue'

  export default {
    name: 'app',
    data() {
      return {
        meat: [
        { meat_count: 4 },
        { meat_mass: 250 },
        { meat_price: 100 },
        { meat_show: true }
        ],
        vegetables: [
        { vegetables_count: 2 },
        { vegetables_mass: 100 },
        { vegetables_price: 50 },
        { vegetables_show: true }
        ],
        cheese: [
        { cheese_count: 3 },
        { cheese_mass: 200 },
        { cheese_price: 80 },
        {cheese_show: true}
        ],
        price: 0
      }
    },

    components: {
      pizzacreate
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    height: 100%;
  }
  html{
    background: #141414;
    color: white;
    font-family: Arial;
    font-weight: bold;
    font-size: 30px;
    height: 100%;
  }
  body{
    height: 100%;
  }
  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .wrapper > div{
    padding: 25px;
  }
  .container_left img{
    height: 350px;
  }
  .container_right td{
    border: 1px solid white;
  }
  .container_right .table{
    border-collapse: collapse;
    border: 2px solid #141414;
    text-align: center;
  }
  .container_right .table td,th{
    padding: 15px; /* Поля вокруг содержимого таблицы */
  }
  .container_right .table img{
    height: 55px;
  }
  .container_left{
    position: relative;
  }
  .box_ing img{
    position: absolute;
    top: 30px;
    left: 25px;

  }
  .box_btn > *{
    float: left;
    /* display: flex; */
  }
  .box_btn button{
    width: 35px;
    height: 35px;
    font-size: 30px;
    background: none;
    border: none;
    color: white;
  }
  .box_price {
    display: flex;
    flex-direction: column;
    align-items:flex-end;
  }
  .box_price .price{
    margin: 15px 0px 15px 0px;
  }
  .box_price button{
    width: 200px;
    height: 50px;
    background: orange;
    color: white;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    font-size: 25px;
  }
  .box_price button:hover{

  }
  .box_btn button:hover{
    color: orange;
  }

</style>
