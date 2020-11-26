<template lang="html">
  <div>
        <navbar />
<div class="w3-container w3-content w3-center w3-padding-64" style="max-width:1200px" id="band">
    <h1 class="w3-wide">Compare Laptops</h1>
    <p class="w3-opacity"><i>A really simple tool for laptop comparison</i></p>
      <p class="w3-justify">Confused? Which laptop you should buy?  Welcome to a really simple laptop comparison tool. Just enter the laptops in the text box and select the machines you want to compare. With our compare laptops tool, you can compare a maximum of three laptops with specifications like RAM, size, operating system, storage, CPU, GPU, processor, and many other things. Just use our laptop comparison tool and let us know your experience. We want to make this tool as simple as possible and more user friendly.</p>
      </div>
      <div>
        <client-only>
      <table class="w3-hide-small w3-hide-medium">
        <tr>
          <th>Search Laptop</th>
          <th><Dropdown
            :articles="articles"
            v-on:selected="validateSelection"
            v-on:filter="getDropdownValues"
            :disabled="false"
            placeholder="Search Your Laptop">
          </Dropdown></th>
          <th><Dropdown1
            :articles="articles"
            v-on:selected="validateSelection1"
            v-on:filter="getDropdownValues1"
            :disabled="false"
            placeholder="Search Your Laptop">
          </Dropdown1></th>
          <th><Dropdown2
            :articles="articles"
            v-on:selected="validateSelection2"
            v-on:filter="getDropdownValues2"
            :disabled="false"
            placeholder="Search Your Laptop">
          </Dropdown2></th>
        </tr>
        <tr>
          <td>About Laptop</td>
          <td><img v-if="selected.title != null" :src="require('~/assets/' + selected.imgpath)" style="width:50px; height:50px;"><button v-if="selected.imgpath != null" @click="linkcall" type="button" name="button">{{selected.amazonlink}}</a></button></td>
          <td><img v-if="selected1.title != null" :src="require('~/assets/' + selected1.imgpath)" style="width:50px; height:50px;"><button v-if="selected1.imgpath != null" @click="linkcall1" type="button" name="button">{{selected1.amazonlink}}</a></button></td>
          <td><img v-if="selected2.title != null" :src="require('~/assets/' + selected2.imgpath)" style="width:50px; height:50px;"><button v-if="selected2.imgpath != null" @click="linkcall2" type="button" name="button">{{selected2.amazonlink}}</a></button></td>
        </tr>
        <tr>
          <td>Title</td>
          <td>{{selected.title}}</td>
          <td>{{selected1.title}}</td>
          <td>{{selected2.title}}</td>
        </tr>
        <tr>
          <td>Note</td>
          <td>{{selected.note}}</td>
          <td>{{selected1.note}}</td>
          <td>{{selected2.note}}</td>
        </tr>
        <tr>
          <td>company</td>
          <td>{{selected.company}}</td>
          <td>{{selected1.company}}</td>
          <td>{{selected2.company}}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>{{selected.price}}</td>
          <td>{{selected1.price}}</td>
          <td>{{selected2.price}}</td>
        </tr>
        <tr>
          <td>Operating System</td>
          <td>{{selected.os}}</td>
          <td>{{selected1.os}}</td>
          <td>{{selected2.os}}</td>
        </tr>
        <tr>
          <td>Size</td>
          <td>{{selected.size}}</td>
          <td>{{selected1.size}}</td>
          <td>{{selected2.size}}</td>
        </tr>
        <tr>
          <td>Is it Two in One?</td>
          <td>{{selected.twoinone}}</td>
          <td>{{selected1.twoinone}}</td>
          <td>{{selected2.twoinone}}</td>
        </tr>

        <tr>
          <td>gpu</td>
          <td>{{selected.gpu}}</td>
          <td>{{selected1.gpu}}</td>
          <td>{{selected2.gpu}}</td>
        </tr>
        <tr>
          <td>Storage</td>
          <td v-if="selected.storage >=1000">{{selected.storage/1000}} TB</td>
          <td v-else="selected.storage != null">{{selected.storage}} GB</td>
          <td v-if="selected1.storage >=1000">{{selected1.storage/1000}} TB</td>
          <td v-else>{{selected1.storage}} GB</td>
          <td v-if="selected2.storage >=1000">{{selected2.storage/1000}} TB</td>
          <td v-else>{{selected2.storage}} GB</td>
        </tr>
        <tr>
          <td>Display</td>
          <td>{{selected.display}}</td>
          <td>{{selected1.display}}</td>
          <td>{{selected2.display}}</td>
        </tr>
        <tr>
          <td>RAM</td>
          <td>{{selected.ram}}</td>
          <td>{{selected1.ram}}</td>
          <td>{{selected2.ram}}</td>
        </tr>
        <tr>
          <td>Has Bluetooth?</td>
          <td>{{selected.bluethooth}}</td>
          <td>{{selected1.bluethooth}}</td>
          <td>{{selected2.bluethooth}}</td>
        </tr>
        <tr>
          <td>Has webcam?</td>
          <td>{{selected.webcam}}</td>
          <td>{{selected1.webcam}}</td>
          <td>{{selected2.webcam}}</td>
        </tr>
        <tr>
          <td>Battery</td>
          <td>{{selected.battery}}</td>
          <td>{{selected1.battery}}</td>
          <td>{{selected2.battery}}</td>
        </tr>
        <tr>
          <td>Processor</td>
          <td>{{selected.processor}}</td>
          <td>{{selected1.processor}}</td>
          <td>{{selected2.processor}}</td>
        </tr>
      </table>
      <table class="w3-hide-large">
        <b >Search Laptop</b>
        <tr>
          <th><Dropdown3
            :articles="articles"
            v-on:selected="validateSelection3"
            v-on:filter="getDropdownValues3"
            :disabled="false"
            placeholder="Search Your Laptop">
          </Dropdown3></th>
          <th><Dropdown4
            :articles="articles"
            v-on:selected="validateSelection4"
            v-on:filter="getDropdownValues4"
            :disabled="false"
            placeholder="Search Your Laptop">
          </Dropdown4></th>
          </tr>
          <b >Amazon Link</b>
        <tr>
          <td><img v-if="selected3.title != null" :src="require('~/assets/' + selected3.imgpath)" style="width:50px; height:50px;"><button v-if="selected3.imgpath != null" @click="linkcall3" type="button" name="button">{{selected3.amazonlink}}</a></button></td>
          <td><img v-if="selected4.title != null" :src="require('~/assets/' + selected4.imgpath)" style="width:50px; height:50px;"><button v-if="selected4.imgpath != null" @click="linkcall4" type="button" name="button">{{selected4.amazonlink}}</a></button></td>
        </tr>
        <b >Title</b>
        <tr>
          <td>{{selected3.title}}</td>
          <td>{{selected4.title}}</td>
        </tr>
        <b>Note</b>
        <tr>
          <td>{{selected3.note}}</td>
          <td>{{selected4.note}}</td>
        </tr>
        <b>Company</b>
        <tr>
          <td>{{selected3.company}}</td>
          <td>{{selected4.company}}</td>
        </tr>
        <b >Price</b>
        <tr>
          <td>{{selected3.price}}</td>
          <td>{{selected4.price}}</td>
        </tr>
        <b >Operating System</b>
        <tr>
          <td>{{selected3.os}}</td>
          <td>{{selected4.os}}</td>
        </tr>
        <b >Size</b>
        <tr>
          <td>{{selected3.size}}</td>
          <td>{{selected4.size}}</td>
        </tr>
        <b >Is it two in one?</b>
        <tr>
          <td>{{selected3.twoinone}}</td>
          <td>{{selected4.twoinone}}</td>
        </tr>

        <b >GPU</b>
        <tr>
          <td>{{selected3.gpu}}</td>
          <td>{{selected4.gpu}}</td>
        </tr>
        <b >Storage</b>
        <tr>
          <td v-if="selected3.storage >=1000">{{selected3.storage/1000}} TB</td>
          <td v-else>{{selected3.storage}} GB</td>
          <td v-if="selected4.storage >=1000">{{selected4.storage/1000}} TB</td>
          <td v-else>{{selected4.storage}} GB</td>
        </tr>
        <b >Display</b>
        <tr>
          <td>{{selected3.display}}</td>
          <td>{{selected4.display}}</td>
        </tr>
        <b >RAM</b>
        <tr>
          <td>{{selected3.ram}}</td>
          <td>{{selected4.ram}}</td>
        </tr>
        <b >Has Bluetooth?</b>
        <tr>
          <td>{{selected3.bluethooth}}</td>
          <td>{{selected4.bluethooth}}</td>
        </tr>
        <b >Has WebCam?</b>
        <tr>
          <td>{{selected3.webcam}}</td>
          <td>{{selected4.webcam}}</td>
        </tr>
        <b >Battery</b>
        <tr>
          <td>{{selected3.battery}}</td>
          <td>{{selected4.battery}}</td>
        </tr>
        <b >Processor</b>
          <tr>
          <td>{{selected3.processor}}</td>
          <td>{{selected4.processor}}</td>
        </tr>
      </table>
      </client-only>
    </div>
    <footer-app />
</div>
</template>
<script>
import footer from '../components/footer.vue'
import navbar from '~/components/navbar.vue'
import Dropdown from '~/components/Dropdown.vue'
import Dropdown1 from '~/components/Dropdown1.vue'
import Dropdown2 from '~/components/Dropdown2.vue'
import Dropdown3 from '~/components/Dropdown2.vue'
import Dropdown4 from '~/components/Dropdown2.vue'
  export default {
    head() {
    // sets document title
    return {
    title: 'Compare laptops',
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    // meta tags
    meta: [
        { hid: 'description', name: 'description', content: 'Compare laptops.' },
        { hid: 'keywords', name: 'keywords', content: 'Compare laptops' }
    ],
    link: [
    {rel: 'canonical', href: 'https://bestbudgetlaptop.net/compare-laptops/'}
    ]
    }
    },
    components: { Dropdown, Dropdown1, navbar, Dropdown2, Dropdown3, Dropdown4, 'footer-app': footer },
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
        selected4: { title: null, content: null },
        selected5: { title: null, content: null },
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
      validateSelection4(selection4) {
        this.selected4 = selection4;
      },
      getDropdownValues(keyword) {
      },
      getDropdownValues1(keyword) {
      },
      getDropdownValues2(keyword) {
      },
      getDropdownValues3(keyword) {
      },
      getDropdownValues4(keyword) {
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
      },
      linkcall3(event){
        alert(this.selected3.amazonlink)
        window.open(this.selected3.amazonlink);
      },
      linkcall4(event){
        alert(this.selected4.amazonlink)
        window.open(this.selected4.amazonlink);
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
</style>
