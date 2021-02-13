<template lang="html">
  <div class="">
    <div class="w3-bar w3-white w3-card">
      <nuxt-link to="/" class="w3-white w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-teal">
      <b>Home</b>
    </nuxt-link>
      <nuxt-link to="/laptop-finder" class="w3-white w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-teal">
      <b>Laptop Finder</b>
    </nuxt-link>
    <nuxt-link to="/compare-laptops" class="w3-white w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-teal">
      <b>Compare Laptops</b>
    </nuxt-link>
      <nuxt-link to="/best-gaming-laptops" class="w3-white w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-teal">
      <b>Best Gaming Laptops</b>
    </nuxt-link>
    <nuxt-link to="/laptops" class="w3-white w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-teal">
      <b>All Laptops</b>
    </nuxt-link>
    <nuxt-link to="/cheap-laptops" class="w3-white w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-teal">
      <b>Cheap Laptops</b>
    </nuxt-link>
      <a href="#" class="w3-padding-large w3-hover-teal w3-hide-small w3-right w3-white"><i class="fa fa-facebook-official"></i></a>
      <a href="#" class="w3-padding-large w3-hover-teal w3-hide-small w3-right w3-white"><i class="fa fa-instagram"></i></a>
      <a href="#" class="w3-padding-large w3-hover-teal w3-hide-small w3-right w3-white"><i class="fa fa-twitter"></i></a>
    </div>
    <div>
    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" v-on:click='isclose = !isclose'>
      <i class="fa fa-bars"></i>
    </a>
  </div>
    <nav class="w3-sidebar w3-bar-block w3-white w3-card w3-animate-left w3-hide-medium w3-hide-large" v-show="isclose" id="mySidebar">
  <a href="javascript:void(0)" v-on:click='isclose = !isclose' class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
  <nuxt-link class="w3-bar-item w3-button" to="/">
   <b>Home</b></nuxt-link>
  <nuxt-link class="w3-bar-item w3-button" to="/laptop-finder">
   <b>Laptop Finder</b></nuxt-link>
  <nuxt-link class="w3-bar-item w3-button" to="/compare-laptops">
   <b>Compare Laptops</b></nuxt-link>
  <nuxt-link class="w3-bar-item w3-button" to="/best-gaming-laptops">
   <b>Best Gaming Laptops</b></nuxt-link>
  <nuxt-link class="w3-bar-item w3-button" to="/laptops">
   <b>All Laptops</b></nuxt-link>
  <nuxt-link class="w3-bar-item w3-button" to="/cheap-laptops">
   <b>Cheap Laptops</b></nuxt-link>
</nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isclose: false
  }
},
methods: {
  smalltoggle: function() {
    this.isclose = !this.close
  }
}
}
</script>

<style lang="css">
</style>
