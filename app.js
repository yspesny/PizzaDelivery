var app = new Vue({
  el: '#app',
  data: {
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
  },

  methods: {
    add_meat: function() {
      this.meat[0].meat_count++;
      this.meat[3].meat_show = true;
    },
    delete_meat: function() {
      if(!this.meat[0].meat_count<=0) {
        this.meat[0].meat_count--;
        if(this.meat[0].meat_count == 0){
          this.meat[3].meat_show = false;
        }
      }
    },
    add_vegetables: function() {
      this.vegetables[0].vegetables_count++;
      this.vegetables[3].vegetables_show = true;
    },
    delete_vegetables: function(){
      if(!this.vegetables[0].vegetables_count<=0) {
        this.vegetables[0].vegetables_count--;
        if(this.vegetables[0].vegetables_count == 0){
          this.vegetables[3].vegetables_show = false;
        }
      }
    },
    add_cheese: function() {
      this.cheese[0].cheese_count++;
      this.cheese[3].cheese_show = true;
    },
    delete_cheese: function() {
      if(!this.cheese[0].cheese_count<=0) {
        this.cheese[0].cheese_count--;
        if(this.cheese[0].cheese_count == 0){
          this.cheese[3].cheese_show = false;
        }
      }
    }
  },

  computed: {
    total_cost: function() {
      return this.price = this.meat[0].meat_count *
             this.meat[2].meat_price +
             this.vegetables[0].vegetables_count *
             this.vegetables[2].vegetables_price +
             this.cheese[0].cheese_count *
             this.cheese[2].cheese_price;
    }
  }
})
