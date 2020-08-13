<template src='./template.html'></template>
<style src="./style.css"></style>


<script>



export default {
  name: 'calendar',

  data(){
    return {
      name: 'Pavle',
      thisMonth: '',
      activeDay: '',
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
      days: ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    }
  },
  created(){
    this.currentMonth();
    this.catchAllDays();
  },
  methods: {
    currentMonth() {
            var d = new Date();
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            this.thisMonth = (document.getElementsByClassName("month").innerHTML = months[d.getMonth()]);
    },
    currentDay(n, day) {
            switch (n) {
              case "Sunday": 
                this.sunday.push(day);
                break;
              case "Monday":
                this.monday.push(day);
                break;
              case "Tuesday":
                this.tuesday.push(day);
                break;
              case "Wednesday":
                  this.wednesday.push(day);
                break;
              case "Thursday":
                this.thursday.push(day);
                break;
              case "Friday":
                this.friday.push(day);
                break;
              case  "Saturday":
                this.saturday.push(day);
                break;
            }
          },
          catchDaysInMonth(day) {
            var d = new Date('2020-08-' + day);
            var n = this.days[d.getDay() ];
            this.currentDay(n, day);
          },
          catchAllDays() {
            for(let i = 0; i <= 31; i++){
              this.catchDaysInMonth(i);
            }
          },
  }
          
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>