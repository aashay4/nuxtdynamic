<template>
  <div>
    <navbar /><br>
    <div class="w3-hide-small w3-hide-medium">
  <table>
    <tr>
      <th>Dropwoen search</th>
      <th><Dropdown
        :articles="articles"
        v-on:selected="validateSelection1"
        v-on:filter="getDropdownValues1"
        :disabled="false"
        placeholder="Please select an laptop">
      </Dropdown></th>
      <th><Dropdown
        :articles="articles"
        v-on:selected="validateSelection2"
        v-on:filter="getDropdownValues2"
        :disabled="false"
        placeholder="Please select an laptop">
      </Dropdown></th>
      <th><Dropdown
        :articles="articles"
        v-on:selected="validateSelection3"
        v-on:filter="getDropdownValues"
        :disabled="false"
        placeholder="Please select an laptop">
      </Dropdown></th>
    </tr>
    <tr>
      <td>Abuut laptop</td>
      <td><img v-if="selected1.title != null" :src="require('~/assets/' + selected1.imgpath)" style="width:50px; height:50px;">{{ selected1.title || 'none' }}<br><button v-if="selected1.amazonlink !== undefined" class="w3-hover-red" @click="linkcall" type="button" name="button"><a>Buy on Amazon</a></button></td>
      <td><img v-if="selected2.title != null" :src="require('~/assets/' + selected2.imgpath)" style="width:50px; height:50px;">{{ selected2.title || 'none' }}<br><button v-if="selected2.amazonlink !== undefined" class="w3-hover-red" @click="linkcall1" type="button" name="button"><a>Buy on Amazon</a></button></td>
      <td><img v-if="selected3.title != null" :src="require('~/assets/' + selected3.imgpath)" style="width:50px; height:50px;">{{ selected3.title || 'none' }}<br><button v-if="selected3.amazonlink !== undefined" class="w3-hover-red" @click="linkcall2" type="button" name="button"><a>Buy on Amazon</a></button></td>
    </tr>
    <tr>
      <td>Company</td>
      <td>{{selected1.company}}</td>
      <td>{{selected2.company}}</td>
      <td>{{selected3.company}}</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>{{selected1.price}}</td>
      <td>{{selected2.price}}</td>
      <td>{{selected3.price}}</td>
    </tr>
    <tr>
      <td>Best Works For</td>
      <td>{{selected1.reason}}</td>
      <td>{{selected2.reason}}</td>
      <td>{{selected3.reason}}</td>
    </tr>
    <tr>
      <td>Operating System</td>
      <td>{{selected1.os}}</td>
      <td>{{selected2.os}}</td>
      <td>{{selected3.os}}</td>
    </tr>
    <tr>
      <td>Size</td>
      <td>{{selected1.size}}</td>
      <td>{{selected2.size}}</td>
      <td>{{selected3.size}}</td>
    </tr>
    <tr>
      <td>Is it twoinone?</td>
      <td>{{selected1.twoinone}}</td>
      <td>{{selected2.twoinone}}</td>
      <td>{{selected3.twoinone}}</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>{{selected1.storage}}</td>
      <td>{{selected2.storage}}</td>
      <td>{{selected3.storage}}</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>{{selected1.display}}</td>
      <td>{{selected2.display}}</td>
      <td>{{selected3.display}}</td>
    </tr>
    <tr>
      <td>RAM</td>
      <td>{{selected1.ram}}</td>
      <td>{{selected2.ram}}</td>
      <td>{{selected3.ram}}</td>
    </tr>
    <tr>
      <td>Expandable Memory</td>
      <td>{{selected1.expandablememory}}</td>
      <td>{{selected2.expandablememory}}</td>
      <td>{{selected3.expandablememory}}</td>
    </tr>
    <tr>
      <td>O.S Type</td>
      <td>{{selected1.ostype}}</td>
      <td>{{selected2.ostype}}</td>
      <td>{{selected3.ostype}}</td>
    </tr>
    <tr>
      <td>Keyboard</td>
      <td>{{selected1.keyboard}}</td>
      <td>{{selected2.keyboard}}</td>
      <td>{{selected3.keyboard}}</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>{{selected1.weight}}</td>
      <td>{{selected2.weight}}</td>
      <td>{{selected3.weight}}</td>
    </tr>
    <tr>
      <td>Has Bluetooth?</td>
      <td>{{selected1.bluethooth}}</td>
      <td>{{selected2.bluethooth}}</td>
      <td>{{selected3.bluethooth}}</td>
    </tr>
    <tr>
      <td>Has Webcam?</td>
      <td>{{selected1.webcam}}</td>
      <td>{{selected2.webcam}}</td>
      <td>{{selected3.webcam}}</td>
    </tr>
    <tr>
      <td>Battery</td>
      <td>{{selected1.battery}}</td>
      <td>{{selected2.battery}}</td>
      <td>{{selected3.battery}}</td>
    </tr>
    <tr>
      <td>Processor</td>
      <td>{{selected1.processor}}</td>
      <td>{{selected2.processor}}</td>
      <td>{{selected3.processor}}</td>
    </tr>
  </table>
</div>
<div class="w3-hide-large w3-responsive">
<table class="width: 100%">
  <p>Dropwoen search</p>
<tr>
  <th><Dropdown
    :articles="articles"
    v-on:selected="validateSelection1"
    v-on:filter="getDropdownValues1"
    :disabled="false"
    placeholder="Please select an laptop">
  </Dropdown></th>
  <th><Dropdown
    :articles="articles"
    v-on:selected="validateSelection2"
    v-on:filter="getDropdownValues2"
    :disabled="false"
    placeholder="Please select an laptop">
  </Dropdown></th>
</tr>
<p v-if="selected1.title != null">About Laptop</p>
<tr v-if="selected1.title != null">
  <td><img v-if="selected1.title != null" :src="require('~/assets/' + selected1.imgpath)" style="width:50px; height:50px;">{{ selected1.title || 'none' }}<br><button v-if="selected1.amazonlink !== undefined" class="w3-hover-red" @click="linkcall" type="button" name="button"><a>Buy on Amazon</a></button></td>
  <td><img v-if="selected2.title != null" :src="require('~/assets/' + selected2.imgpath)" style="width:50px; height:50px;">{{ selected2.title || 'none' }}<br><button v-if="selected2.amazonlink !== undefined" class="w3-hover-red" @click="linkcall1" type="button" name="button"><a>Buy on Amazon</a></button></td>
</tr><br>
<p>Company</p>
<tr>
  <td>{{selected1.company}}</td>
  <td>{{selected2.company}}</td>
</tr>
<p>Price</p>
<tr>
  <td>{{selected1.price}}</td>
  <td>{{selected2.price}}</td>
</tr>
<p>Best Works For</p>
<tr>
  <td>{{selected1.reason}}</td>
  <td>{{selected2.reason}}</td>
</tr>
<p>Operating System</p>
<tr>
  <td>{{selected1.os}}</td>
  <td>{{selected2.os}}</td>
</tr>
<p>Size</p>
<tr>
  <td>{{selected1.size}}</td>
  <td>{{selected2.size}}</td>
</tr>
<p>Is it twoinone?</p>
<tr>
  <td>{{selected1.twoinone}}</td>
  <td>{{selected2.twoinone}}</td>
</tr>
  <p>Storage</p>
<tr>
  <td>{{selected1.storage}}</td>
  <td>{{selected2.storage}}</td>
</tr>
<p>Display</p>
<tr>
  <td>{{selected1.display}}</td>
  <td>{{selected2.display}}</td>
</tr>
<p>RAM</p>
<tr>
  <td>{{selected1.ram}}</td>
  <td>{{selected2.ram}}</td>
</tr>
<p>Expandable Memory</p>
<tr>
  <td>{{selected1.expandablememory}}</td>
  <td>{{selected2.expandablememory}}</td>
</tr>
<p>O.S Type</p>
<tr>
  <td>{{selected1.ostype}}</td>
  <td>{{selected2.ostype}}</td>
</tr>
<p>Keyboard</p>
<tr>
  <td>{{selected1.keyboard}}</td>
  <td>{{selected2.keyboard}}</td>
</tr>
<p>Weight</p>
<tr>
  <td>{{selected1.weight}}</td>
  <td>{{selected2.weight}}</td>
</tr>
<p>Has Bluetooth?</p>
<tr>
  <td>{{selected1.bluethooth}}</td>
  <td>{{selected2.bluethooth}}</td>
</tr>
<p>Has Webcam?</p>
<tr>
  <td>{{selected1.webcam}}</td>
  <td>{{selected2.webcam}}</td>
</tr>
<p>Battery</p>
<tr>
  <td>{{selected1.battery}}</td>
  <td>{{selected2.battery}}</td>
</tr>
<p>Processor</p>
<tr>
  <td>{{selected1.processor}}</td>
  <td>{{selected2.processor}}</td>
</tr>
</table>
</div>
</div>
</template>
<script>
import Dropdown from '~/components/Dropdown.vue'
import navbar from '~/components/navbar.vue'
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
        selected: { title: null, content: null, author: null },
        selected1: { title: null, content: null, author: null },
        selected2: { title: null, content: null, author: null },
        selected3: { title: null, content: null, author: null },
        search: ''
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
        alert(this.selected1.amazonlink)
        window.open(this.selected1.amazonlink);
      },
      linkcall1(event){
        alert(this.selected2.amazonlink)
        window.open(this.selected2.amazonlink);
      },
      linkcall2(event){
        alert(this.selected3.amazonlink)
        window.open(this.selected3.amazonlink);
      }
    }
  }
</script>


<style type="text/css" scoped>
  h1 {
    font-weight: 100;
    font-size: 1.5em;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 0.3%;
  }
  p {
    text-align: center;
    font-weight: bold;
    margin-left: 55%;
  }
</style>
