<template>
  <div>
        <navbar />
    <div class="w3-main w3-content" style="max-width:1200px;">

  <!-- First Photo Grid-->
  <div class="w3-row-padding w3-padding-16 w3-center" id="food">
    <div class="w3-quarter">
      <p>Search Your Laptop </p>
      <Dropdown
        :articles="articles"
        v-on:selected="validateSelection"
        v-on:filter="getDropdownValues"
        :disabled="false"
        placeholder="Please select an animal">
      </Dropdown>
      <img v-if="selected.title != null" :src="require('~/assets/' + selected.imgpath)" style="width:100%">
      <h3>Selected animal: {{ selected.title || 'none' }}</h3>
      <h3>Selected COntent: {{ selected.body || 'none' }}</h3>
      <button v-if="selected.imgpath != null" @click="linkcall" type="button" name="button">Buy on Amazon</a></button></td>
      <h3>Selected imagepath: {{ selected.imgpath || 'none' }}</h3>
      <h3>Selected imagepath: {{ selected.amazonlink || 'lik' }}</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <p>Search Your Laptop </p>
      <img v-if="selected1.title != null" :src="require('~/assets/' + selected1.imgpath)" style="width:100%">
      <h3>Selected animal: {{ selected1.title || 'none' }}</h3>
      <h3>Selected COntent: {{ selected1.body || 'none' }}</h3>
      <h3>Selected imagepath: {{ selected1.imgpath || 'none' }}</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <p>Search Your Laptop </p>
      <img v-if="selected2.title != null" :src="require('~/assets/' + selected2.imgpath)" style="width:100%">
      <h3>Selected animal: {{ selected2.title || 'none' }}</h3>
      <h3>Selected COntent: {{ selected2.body || 'none' }}</h3>
      <h3>Selected imagepath: {{ selected2.imgpath || 'none' }}</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div class="w3-quarter">
      <p>Search Your Laptop </p>
      <img v-if="selected3.title != null" :src="require('~/assets/' + selected3.imgpath)" style="width:100%">
      <h3>Selected animal: {{ selected3.title || 'none' }}</h3>
      <h3>Selected COntent: {{ selected3.body || 'none' }}</h3>
      <h3>Selected imagepath: {{ selected3.imgpath || 'none' }}</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
  </div>
</div>

<div class="w3-container w3-content w3-center w3-padding-64" style="max-width:1200px" id="band">
    <h2 class="w3-wide">THE BAND</h2>
    <p class="w3-opacity"><i>We love music</i></p>
    <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div class="w3-row w3-padding-32">
      <div class="w3-quarter">
        Title
      </div>
      <div class="w3-threequarter">
      <div class="w3-quarter">
        <div>
        <p>choose your laptop</p></div>
        <Dropdown
          :articles="articles"
          v-on:selected="validateSelection"
          v-on:filter="getDropdownValues"
          :disabled="false"
          placeholder="Please select an animal">
        </Dropdown>
        <img v-if="selected.title != null" :src="require('~/assets/' + selected.imgpath)" class="w3-margin-top" style="height:50px; width:50px">{{selected.title}}
        <button v-if="selected.imgpath != null" @click="linkcall" type="button" class="w3-margin-top" name="button">Buy on Amazon</a></button>
        <p>Title</p></div>
      <div class="w3-quarter">
        <p>Name</p>
        <img src="https://www.w3schools.com/w3images/bandmember.jpg" class="w3-round w3-margin-bottom" alt="Random Name" style="width:60%">
      </div>
      <div class="w3-quarter">
        <p>Name</p>
        <img src="https://www.w3schools.com/w3images/bandmember.jpg" class="w3-round w3-margin-bottom" alt="Random Name" style="width:60%">
      </div>
      <div class="w3-quarter">
        <p>Name</p>
        <img src="https://www.w3schools.com/w3images/bandmember.jpg" class="w3-round w3-margin-bottom" alt="Random Name" style="width:60%">
      </div>
      </div>
    </div>
  </div>

  <div class="w3-row-padding w3-padding-64 w3-theme-l1" id="work">

<div class="w3-quarter">
<h2>Our Work</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<div class="w3-quarter">
<div class="w3-card w3-white">
  <Dropdown
    :articles="articles"
    v-on:selected="validateSelection"
    v-on:filter="getDropdownValues"
    :disabled="false"
    placeholder="Please select an animal">
  </Dropdown>
  <img v-if="selected.title != null" :src="require('~/assets/' + selected.imgpath)" style="width:100%">
  <div class="w3-container">
  <h3>{{selected.title}}</h3>
  <h4>Trade</h4>
  <p>Blablabla</p>
  <p>Blablabla</p>
  <p>Blablabla</p>
  <p>Blablabla</p>
  </div>
  </div>
</div>

<div class="w3-quarter">
<div class="w3-card w3-white">
  <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Lights" style="width:100%">
  <div class="w3-container">
  <h3>Customer 2</h3>
  <h4>Trade</h4>
  <p>Blablabla</p>
  <p>Blablabla</p>
  <p>Blablabla</p>
  <p>Blablabla</p>
  </div>
  </div>
</div>

<div class="w3-quarter">
<div class="w3-card w3-white">
  <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Mountains" style="width:100%">
  <div class="w3-container">
  <h3>Customer 3</h3>
  <h4>Trade</h4>
  <p>Blablabla</p>
  <p>Blablabla</p>
  <p>Blablabla</p>
  <p>Blablabla</p>
  </div>
  </div>
</div>
</div>

</div>
</template>
<script>
import navbar from '~/components/navbar.vue'
import Dropdown from '~/components/Dropdown.vue'
  export default {
    components: { Dropdown, navbar },
    async asyncData(context){
      const {data} = await context.$axios.get('/api/articles/')
      return {
        articles : data,
      }
    },
    name: 'filterpost',
    data () {
      return {
        articles: [],
        selected: { title: null, content: null },
        selected1: { title: null, content: null },
        selected2: { title: null, content: null },
        selected3: { title: null, content: null },
      }
    },
    methods: {
      validateSelection(selection) {
        this.selected = selection;
      },
      validateSelection1(selection1) {
        this.selected1 = selection1;
      },
      validateSelection2(selection2) {
        this.selected2 = selection2;
      },
      validateSelection3(selection3) {
        this.selected3 = selection3;
      },
      getDropdownValues(keyword) {
        console.log('You could refresh options by querying the API with '+keyword);
      },
      getDropdownValues1(keyword) {
        console.log('You could refresh options by querying the API with '+keyword);
      },
      getDropdownValues2(keyword) {
        console.log('You could refresh options by querying the API with '+keyword);
      },
      linkcall(event){
        alert(this.selected.amazonlink)
        window.open(this.selected.amazonlink);
      }
    }
  }
</script>


<style type="text/css" scoped>
  body {
  }
  h1 {
  }
  p {
 }
</style>
