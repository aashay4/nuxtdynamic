<template>
  <div>
        <navbar />
    <div class="w3-main w3-content" style="max-width:1200px;">

  <!-- First Photo Grid-->
  <div class="w3-row-padding w3-padding-16 w3-center" id="food">
    <div class="w3-quarter">
      <p>Search Your Laptop </p>
      <img v-if="selected.title != null" :src="require('~/assets/' + selected.imgpath)" style="width:100%">
      <h3>Selected animal: {{ selected.title || 'none' }}</h3>
      <h3>Selected COntent: {{ selected.body || 'none' }}</h3>
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
<table class="table">
  <Dropdown
    :articles="articles"
    v-on:selected="validateSelection"
    v-on:filter="getDropdownValues"
    :disabled="false"
    placeholder="Please select an animal">
  </Dropdown>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col"><Dropdown
        :articles="articles"
        v-on:selected="validateSelection1"
        v-on:filter="getDropdownValues1"
        :disabled="false"
        placeholder="Please select an laptop">
      </Dropdown></th>
      <th scope="col"><Dropdown
        :articles="articles"
        v-on:selected="validateSelection2"
        v-on:filter="getDropdownValues2"
        :disabled="false"
        placeholder="Please select an laptop">
      </Dropdown></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img v-if="selected.title != null" :src="require('~/assets/' + selected.imgpath)" style="width:50px; height: 50px"><button v-if="selected.imgpath != null" @click="linkcall" type="button" name="button">Buy on Amazon</a></button></td>
      <td><img v-if="selected1.title != null" :src="require('~/assets/' + selected1.imgpath)" style="width:50px; height: 50px"></td>
      <td><img v-if="selected2.title != null" :src="require('~/assets/' + selected2.imgpath)" style="width:50px; height: 50px"></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{{selected.title}}</td>
      <td>{{selected1.title}}</td>
      <td>{{selected2.title}}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
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
    font-family: Arial, Helvetica, sans-serif;
    line-height: 3em;
  }
  h1 {
    font-weight: 100;
    font-size: 1.5em;
  }
  p {
    font-size: .8em;
    color: #ccc;
  }
</style>
