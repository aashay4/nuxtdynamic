<template lang="html">
  <div class="w3-white w3-margin">
  <div class="w3-container w3-padding w3-teal">
    <h4>Popular Posts</h4>
  </div>
  <ul class="w3-ul w3-hoverable w3-white">
    <li class="w3-padding-16">
      <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
      <nuxt-link style="color: black" to="/best-gaming-laptops/"><span class="w3-large">Best Gaming Laptops</span></nuxt-link>
      <br>
      <span>Gaming</span>
    </li>
    <li class="w3-padding-16">
      <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
      <nuxt-link style="color: black" to="/best-laptops-for-programming/"><span class="w3-large">Laptops for Programming</span></nuxt-link>
      <br>
      <span>Programming, Business</span>
    </li>
    <li class="w3-padding-16">
      <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
      <nuxt-link style="color: black" to="/best-laptops-for-writers/"><span class="w3-large">Best Laptops for Writers</span></nuxt-link>
      <br>
      <span>Writers, professionals</span>
    </li>
    <li class="w3-padding-16">
      <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
      <nuxt-link style="color: black" to="/laptops-for-college-students/"><span class="w3-large">Laptops for College Students</span></nuxt-link>
      <br>
      <span>Students</span>
    </li>
  </ul>
  <hr>
</div>
</template>

<script>
export default {
name: 'popularposts',
}
</script>

<style lang="css">
</style>
