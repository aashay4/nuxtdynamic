<template lang="html">
  <client-only>
  <div>
  <!-- First Photo Grid-->
  <h2>HTML Table</h2>

<table>
  <tr>
    <th><Dropdown
      :articles="articles"
      v-on:selected="validateSelection"
      v-on:filter="getDropdownValues"
      :disabled="false"
      placeholder="Please select an animal">
    </Dropdown></th>
    <th>Hi</th>
    <th>Hi</th>
  </tr>
  <tr>
    <td><img v-if="selected.title != null" :src="require('~/assets/' + selected.imgpath)" style="width:50px; height:50px;"><button v-if="selected.imgpath != null" @click="linkcall" type="button" name="button">{{selected.amazonlink}}</a></button></td>
    <td><img v-if="selected1.title != null" :src="require('~/assets/' + selected1.imgpath)" style="width:50px; height:50px;"><button v-if="selected1.imgpath != null" @click="linkcall1" type="button" name="button">{{selected1.amazonlink}}</a></button></td>
    <td><img v-if="selected2.title != null" :src="require('~/assets/' + selected2.imgpath)" style="width:50px; height:50px;"><button v-if="selected2.imgpath != null" @click="linkcall2" type="button" name="button">{{selected2.amazonlink}}</a></button></td>
  </tr>
  <tr>
    <td>{{selected.title}}</td>
    <td>{{selected1.title}}</td>
    <td>{{selected2.title}}</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
</div>
</div>
</client-only>
</template>
<script>
import Dropdown from '~/components/Dropdown.vue'
  export default {
    components: { Dropdown },
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
      },
      linkcall1(event){
        alert(this.selected1.amazonlink)
        window.open(this.selected1.amazonlink);
      },
      linkcall2(event){
        alert(this.selected2.amazonlink)
        window.open(this.selected2.amazonlink);
      }
    }
  }
</script>


<style type="text/css" scoped>
table
{
font-family: arial, sans-serif;
border-collapse: collapse;
width: 100%;
}

td, th {
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
}

tr:nth-child(even) {
background-color: #dddddd;
}
</style>
