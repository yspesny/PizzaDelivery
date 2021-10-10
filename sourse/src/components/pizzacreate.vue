<template>
  <div id="app">
    <div class="wrapper">
      <div class="container_left">
        <img src="../assets/pizza.png" alt="">
        <div class="box_ing">
          <img v-show="meat[3].meat_show" src="../assets/meat.png" alt="">
          <img v-show="vegetables[3].vegetables_show" src="../assets/vegetables.png" alt="">
          <img v-show="cheese[3].cheese_show" src="../assets/cheese.png" alt="">
        </div>
      </div>
      <div class="container_right">
        <table class="table">
          <tr>
            <td>Мясо</td>
            <td class="box_btn">
              <button v-on:click="add_meat" type="button">+</button>
              <p>{{meat[0].meat_count}}</p>
              <button v-on:click="delete_meat" type="button">-</button>
            </td>
            <td>{{meat[1].meat_mass * meat[0].meat_count}}гр</td>
            <td>{{meat[2].meat_price * meat[0].meat_count}}р</td>
            <td><img src="../assets/meat.png" alt=""></td>
          </tr>
          <tr>
            <td>Овощи</td>
            <td class="box_btn">
              <button v-on:click="add_vegetables" type="button">+</button>
              <p>{{vegetables[0].vegetables_count}}</p>
              <button v-on:click="delete_vegetables" type="button">-</button>
            </td>
            <td>{{vegetables[1].vegetables_mass * vegetables[0].vegetables_count}}гр</td>
            <td>{{vegetables[2].vegetables_price * vegetables[0].vegetables_count}}р</td>
            <td><img src="../assets/vegetables.png" alt=""></td>
          </tr>
          <tr>
            <td>Сыр</td>
            <td class="box_btn">
              <button v-on:click="add_cheese" type="button">+</button>
              <p>{{cheese[0].cheese_count}}</p>
              <button v-on:click="delete_cheese" type="button">-</button>
            </td>
            <td>{{cheese[1].cheese_mass * cheese[0].cheese_count}}гр</td>
            <td>{{cheese[2].cheese_price * cheese[0].cheese_count}}р</td>
            <td><img src="../assets/cheese.png" alt=""></td>
          </tr>
        </table>
        <div class="box_price">
          <h1 class="price">{{total_cost}}р</h1>
          <form action="index.html" method="post">
            <button type="button" name="button">Заказать</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pizzacreate',
    props: ['meat', 'vegetables', 'cheese', 'price'],
    methods: {
      cost: function(){
        return this.price = this.meat[0].meat_count *
        this.meat[2].meat_price +
        this.vegetables[0].vegetables_count *
        this.vegetables[2].vegetables_price +
        this.cheese[0].cheese_count *
        this.cheese[2].cheese_price;
      },
      add_meat: function() {
        this.meat[0].meat_count++;
        this.cost();
        if(this.meat[0].meat_count == 1) this.meat[3].meat_show = true;
      },
      delete_meat: function() {
        if(this.meat[0].meat_count > 0) this.meat[0].meat_count--;
        if(this.meat[0].meat_count <= 0) this.meat[3].meat_show = false;
        this.cost();
      },
      add_vegetables: function() {
        this.vegetables[0].vegetables_count++;
        this.cost();
        if(this.vegetables[0].vegetables_count == 1) this.vegetables[3].vegetables_show = true;
      },
      delete_vegetables: function() {
        if(this.vegetables[0].vegetables_count > 0) this.vegetables[0].vegetables_count--;
        if(this.vegetables[0].vegetables_count <= 0) this.vegetables[3].vegetables_show = false;
        this.cost();
      },
      add_cheese: function() {
        this.cheese[0].cheese_count++;
        this.cost();
        if(this.cheese[0].cheese_count == 1) this.cheese[3].cheese_show = true;
      },
      delete_cheese: function() {
        if(this.cheese[0].cheese_count > 0) this.cheese[0].cheese_count--;
        if(this.cheese[0].cheese_count <= 0) this.cheese[3].cheese_show = false;
        this.cost();
      }
    },
    computed: {
      total_cost: function(){
        return this.price;
      }
    },
    beforeMount(){
      this.cost()
    }
  }
</script>

<style >

</style>
