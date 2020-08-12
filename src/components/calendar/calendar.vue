<template src='./template.html'></template>
<style src="./style.css"></style>


<script>



export default {
  name: 'calendar',

  data(){
    return {
      name: 'Pavle',
      thisMonth: '',
      // thisDay: '',
      activeDay: '',
    }
  },
  created(){
    this.currentMonth();
    this.currentDay();
  },
  methods: {
    currentMonth() {
            var d = new Date();
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            this.thisMonth = (document.getElementsByClassName("month").innerHTML = months[d.getMonth()]);
          },
    currentDay() {
            // var d = new Date();
            // this.thisDay = d.getDay();
            // console.log(this.thisDay);
            switch (new Date().getDay()) {
            case 0:
              this.activeDay = "Sunday";
              break;
            case 1:
              this.activeDay = "Monday";
              break;
            case 2:
              this.activeDay = "Tuesday";
              break;
            case 3:
              this.activeDay = "Wednesday";
              break;
            case 4:
              this.activeDay = "Thursday";
              break;
            case 5:
              this.activeDay = "Friday";
              break;
            case  6:
              this.activeDay = "Saturday";
          }
          },
  }
          
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>