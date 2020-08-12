<template src='./template.html'></template>
<style src="./style.css"></style>


<script>



export default {
  name: 'calendar',

  data(){
    return {
      name: 'Pavle',
      thisMonth: '',
    }
  },
  created: function currentMonth() {
    var d = new Date();
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      this.thisMonth = (document.getElementsByClassName("month").innerHTML = months[d.getMonth()]);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>