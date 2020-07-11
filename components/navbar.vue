<template lang="html">
  <div class="">
    <div class="w3-bar w3-white w3-card">
      <router-link to="/" class="w3-white">
      <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Home</a></b>
    </router-link>
      <router-link to="/laptop-finder/" class="w3-white">
      <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Laptop Finder</a></b>
    </router-link>
    <nuxt-link to="/compare-laptops/" class="w3-white">
      <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Compare Laptops</a></b>
    </nuxt-link>
      <router-link to="/best-gaming-laptops/" class="w3-white">
      <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Best Gaming Laptops</a></b>
    </router-link>
    <router-link to="/contact/" class="w3-white">
      <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Contact</a></b>
    </router-link>
      <div class="w3-dropdown-hover w3-hide-small">
        <b><button class="w3-padding-large w3-button" title="More">More <i class="fa fa-caret-down"></i></button></b>
        <div class="w3-dropdown-content w3-bar-block">
          <router-link to="/best-gaming-laptops/" class="w3-white">
            <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Best Gaming Laptops</a></b>
          </router-link>
          <router-link to="/best-student-laptops/" class="w3-white">
            <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Best Laptops for College Students</a></b>
          </router-link>
          <router-link to="/about-us/" class="w3-white">
            <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Best Laptops for Music</a></b>
          </router-link>
          <router-link to="/about-us/" class="w3-white">
            <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Best Laptops for Programming</a></b>
          </router-link>
            <router-link to="/about-us/" class="w3-white">
              <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Best Laptops for Writers</a></b>
            </router-link>
        </div>
      </div>
      <a href="#" class="w3-padding-large w3-hover-red w3-hide-small w3-right w3-white"><i class="fa fa-search"></i></a>
      <a href="#" class="w3-padding-large w3-hover-red w3-hide-small w3-right w3-white"><i class="fa fa-facebook-official"></i></a>
      <a href="#" class="w3-padding-large w3-hover-red w3-hide-small w3-right w3-white"><i class="fa fa-instagram"></i></a>
      <a href="#" class="w3-padding-large w3-hover-red w3-hide-small w3-right w3-white"><i class="fa fa-twitter"></i></a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
