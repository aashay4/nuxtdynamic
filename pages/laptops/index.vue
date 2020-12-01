<template lang="html">
  <div class="w3-light-grey">
          <navbar />
<!-- w3-content defines a container for fixed size centered content,
and is wrapped around the whole page content, except for the footer in this example -->
<div class="w3-content" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>List of Laptops: Choose the best suitable laptop</h1>
          <span class="w3-opacity">Dec 1, 2020</span><em class="w3-opacity"> by </em><strong style="color: blue">Denzel Vieta</strong>
          <hr>
          <p>Shop the best laptop as per your requirement. Filter the best laptops as per your budget, the company you prefer, operating system you are comfortable with and the kind of tasks you are going to perform on this laptop. Accelerate everything you do on a laptop by selecting the perfect laptop as per your profession with ease. Compare different brands in the least amount of time.</p>
          <p>If you want to comare different laptps, you can visit <nuxt-link to="/compare-laptops/" style="color: blue">this link</nuxt-link> to compare all the features and specifications. If you want more customization in the laptop search then you can visit our laptop compare tool.</p><hr>
            <h2>
              Filter Laptops
            </h2><br>
            <select style="width:35%" v-model="price" class="" @change.prevent="findit">
    <option disabled value="">Price</option>
    <option value="100">Under 100</option>
    <option value="200">Under 200</option>
    <option value="300">Under 300</option>
    <option value="400">Under 400</option>
    <option value="500">Under 500</option>
    <option value="600">Under 600</option>
    <option value="700">Under 700</option>
    <option value="800">Under 800</option>
    <option value="1000">Under 1000</option>
    <option value="1600">Under 1600</option>
    <option value="2000">Under 2000</option>
    <option value="2500">Under 2500</option>
    <option value="5000">No Limit</option>
  </select>
          <select style="width:25%" v-model="os" @change.prevent="finditos">
  <option disabled value="">OS</option>
  <option>macOS</option>
  <option>Windows</option>
  <option>Chrome</option>
  <option>all</option>
</select>
<select style="width:25%" v-model="purpose" @change.prevent="finditpurpose">
<option disabled value="">Purpose</option>
<option value="Gaming">Gaming</option>
<option value="General-purpose">General Purpose</option>
<option value="All-purpose">All-purpose</option>
<option value="Writing">Writing</option>
<option value="Programming">Programming</option>
<option value="Music production">Music Production</option>
<option value="Kids">Kids</option>
<option value="High school">High school</option>
<option value="Video editing">Video editing</option>
<option value="Photo editing">Photo editing</option>
<option value="Business">Business</option>
<option value="College students">College students</option>
</select><br><br>
<select style="width:25%" v-model="company" @change.prevent="finditcompany">
<option disabled value="">Company</option>
<option>HP</option>
<option>Dell</option>
<option>Razer</option>
<option>Lenovo</option>
<option>Apple</option>
<option>Samsung</option>
<option>Acer</option>
<option>MSI</option>
<option>Asus</option>
<option>Google</option>
</select>
<select style="width:25%" v-model="ram" @change.prevent="finditram">
<option disabled value="">RAM</option>
<option value="4">4 GB</option>
<option value="8">8 GB</option>
<option value="16">16 GB</option>
<option value="32">32 GB</option>
</select>
<select style="width:25%" v-model="storage" @change.prevent="finditstorage1">
<option disabled value="">Storage</option>
<option value="32">32 GB</option>
<option value="64">64 GB</option>
<option value="128">128 GB</option>
<option value="256">256 GB</option>
<option value="512">512 GB</option>
<option value="1000">1 TB</option>
</select><br><br>
<select style="width:25%" v-model="size" @change.prevent="finditsize">
<option disabled value="">Size</option>
<option value="11">Upto 11 inches</option>
<option value="12">Upto 12 inches</option>
<option value="13">Upto 13 inches</option>
<option value="14">Upto 14 inches</option>
<option value="15">Upto 15 inches</option>
<option value="20">Show all</option>
</select>
<select style="width:25%" v-model="weight" @change.prevent="finditweight">
<option disabled value="">Weight</option>
<option value="2">Upto 2 Pounds</option>
<option value="3">Upto 3 Pounds</option>
<option value="4">Upto 4 Pounds</option>
<option value="5">Upto 5 Pounds</option>
<option value="20">Show all</option>
</select>
<select style="width:25%" v-model="battery" @change.prevent="finditbattery">
<option disabled value="">Battery Life</option>
<option value="12">12+ Hours</option>
<option value="10">10+ Hours</option>
<option value="8">8+ Hours</option>
<option value="6">6+ Hours</option>
</select>
<hr>

              <div class="container w3-white w3-card" v-for="article in paginate"
                :key="article._id"><br>
  <div class="row">
    <div class="col-sm-4">
      <img v-if="article.title != null" :src="require('~/assets/' + article.imgpath)" style="width:100px; height:100px">
    </div>
    <div class="col-sm-4">

      <h5><nuxt-link style="color: black" :to="'/laptops/' + article._id + '/'"><span class="w3-large w3-text-teal">{{ article.title }},</span></nuxt-link></h5>
      <span>OS: {{article.os}}</span><br>
      <span>{{article.size}} Inches</span><br>
      <span>{{article.ram}} GB RAM</span><br>
      <span v-if="article.storage >= 1000">{{ article.storage/1000 }} TB Storage,</span>
      <span v-else>{{ article.storage }} GB Storage,</span><br>
    </div>
    <div class="col-sm-4">
      <h3>${{article.price}}</h3>
      <p><a :href="article.amazonlink"><button class="w3-button w3-block w3-teal">Buy Now</button></a></p>
    </div>
  </div><hr>
</div>
<div>
<button v-for="pageNumber in totalPages" :key="pageNumber.id" class="w3-button" v-bind:key="pageNumber" @click="setPage(pageNumber)" :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }} </button>
</div>
      <h3>Best Affordable Laptops</h3>

          </div></div>
    </div>

    <!-- About/Information menu -->
    <div class="w3-col l4">
      <popularposts />

      <div class="w3-white w3-margin">
      <div class="w3-container w3-padding w3-teal">
        <h4>Related Posts</h4>
      </div>
      <ul class="w3-ul w3-hoverable w3-white">
        <li class="w3-padding-16">
          <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <nuxt-link style="color: black" to="/cheap-gaming-laptops-under-1000-dollars/"><span class="w3-large">Gaming Laptops Under 1000 Dollars</span></nuxt-link>
          <br>
          <span>Gaming</span>
        </li>
        <li class="w3-padding-16">
          <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <nuxt-link style="color: black" to="/under-500/"><span class="w3-large">Laptops Under 500</span></nuxt-link>
          <br>
          <span>Students</span>
        </li>
        <li class="w3-padding-16">
          <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <nuxt-link to="/under-400-dollars/" style="color: black"><span class="w3-large">Cheap Laptops Under 400 Dollars</span></nuxt-link>
          <br>
          <span>General-purpose</span>
        </li>
        <li class="w3-padding-16">
          <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <nuxt-link to="/under-500/" style="color: black"><span class="w3-large">Cheap Laptops Under 500 Dollars</span></nuxt-link>
          <br>
          <span>All-purpose</span>
        </li>
      </ul>
    </div>
      <hr>
    <!-- Advertising -->
      <div class="w3-white w3-margin">
        <div class="w3-container w3-padding w3-teal">
          <h4>Advertise</h4>
        </div>
        <div class="w3-container w3-white">
          <div class="w3-container w3-display-container w3-light-grey w3-section" style="height:200px">
            <span class="w3-display-middle">AD</span>
          </div>
        </div>
      </div>
      <hr>

      <div class="w3-white w3-margin">
        <div class="w3-container w3-padding w3-teal">
          <h4>Follow Us</h4>
        </div>
        <div class="w3-container w3-xlarge w3-padding">
          <i class="fa fa-facebook-official w3-hover-opacity"></i>
          <i class="fa fa-instagram w3-hover-opacity"></i>
          <i class="fa fa-pinterest-p w3-hover-opacity"></i>
          <i class="fa fa-twitter w3-hover-opacity"></i>
          <i class="fa fa-linkedin w3-hover-opacity"></i>
        </div>
      </div>
      <hr>

      <!-- Subscribe -->
      <div class="w3-white w3-margin">
        <div class="w3-container w3-padding w3-teal">
          <h4>Subscribe</h4>
        </div>
        <div class="w3-container w3-white"><br>
          <p>Enter your e-mail below and get notified on the latest blog posts.</p><br>
          <p><input class="w3-input w3-border" type="text" placeholder="Enter e-mail" style="width:100%"></p><br>
          <p>
            <button class="w3-button w3-block w3-teal">Subscribe</button>
          </p><br>
        </div>
      </div>

    <!-- END About/Intro Menu -->
    </div>

  <!-- END GRID -->
  </div>

<!-- END w3-content -->
</div>

<!-- Subscribe Modal -->
<div id="subscribe" class="w3-modal w3-animate-opacity">
  <div class="w3-modal-content" style="padding:32px">
    <div class="w3-container w3-white">
      <i onclick="document.getElementById('subscribe').style.display='none'" class="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
      <h2 class="w3-wide">SUBSCRIBE</h2>
      <p>Join my mailing list to receive updates on the latest blog posts and other things.</p>
      <p><input class="w3-input w3-border" type="text" placeholder="Enter e-mail"></p>
      <button type="button" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('subscribe').style.display='none'">Subscribe</button>
    </div>
  </div>
</div>

<!-- Footer -->
<footer-app />

  </div>
</template>

<script>
import footer from '~/components/footer.vue'
import popularposts from '~/components/popularposts.vue'
import navbar from '~/components/navbar.vue'

export default {
  head() {
  // sets document title
  return {
  title: 'Laptops: Choose the best laptop as per your requirements',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Find the best laptops by entering your preferred budget, RAM, storage, company, OS, weight, battery life. Checkout laptops now!' }
  ],
  link: [
  {rel: 'canonical', href: 'https://bestbudgetlaptop.net/under-500/'}
  ]
  }
  },
components: { 'footer-app': footer, navbar, popularposts },
data() {
  return {
    price: '1600',
    articles: [],
    os: '',
    purpose: '',
    company: '',
    ram: '',
    storage: '',
    size: '',
    weight: '',
    searchKey: '',
  currentPage: 1,
  itemsPerPage: 16,
  resultCount: 0,
  battery: ''
  }
},
methods: {
async finditbattery(){
  this.os = ''
  this.price = ''
  this.purpose = ''
  this.company = ''
  this.ram = ''
  this.storage = ''
  this.size = ''
  this.weight = ''
  await this.$axios.$post('/api/articles/finditbattery', {
    battery: this.battery
  })
  .then((response) => {
   this.articles = response
   this.$router.push({ to:'/#laptops' })
 })
},
async finditweight(){
  this.os = ''
  this.price = ''
  this.purpose = ''
  this.company = ''
  this.ram = ''
  this.storage = ''
  this.size = ''
  this.battery = ''
    await this.$axios.$post('/api/articles/finditweight', {
      weight: this.weight
    })
    .then((response) => {
     this.articles = response
     this.$router.push({ to:'/#laptops' })
   })
},
setPage: function(pageNumber) {
    this.currentPage = pageNumber
  },
async finditsize(){
  this.os = ''
  this.price = ''
  this.purpose = ''
  this.company = ''
  this.ram = ''
  this.storage = ''
  this.battery = ''
  this.weight = ''
    await this.$axios.$post('/api/articles/finditsize', {
      size: this.size
    })
    .then((response) => {
     this.articles = response
     this.$router.push({ to:'/#laptops' })
   })
},
  async finditstorage1(){
    this.os = ''
    this.price = ''
    this.purpose = ''
    this.company = ''
    this.ram = ''
    this.battery = ''
    this.size = ''
    this.weight = ''
      await this.$axios.$post('/api/articles/finditstorage1', {
        storage: this.storage
      })
      .then((response) => {
       this.articles = response
       this.$router.push({ to:'/#laptops' })
     })
  },

  async finditram(){
    this.os = ''
    this.price = ''
    this.purpose = ''
    this.company = ''
    this.battery = ''
    this.storage = ''
    this.size = ''
    this.weight = ''
      await this.$axios.$post('/api/articles/finditstorage', {
        ram: this.ram
      })
      .then((response) => {
       this.articles = response
       this.$router.push({ to:'/#laptops' })
     })
  },
  async findit(){
    this.os = ''
    this.battery = ''
    this.purpose = ''
    this.company = ''
    this.ram = ''
    this.storage = ''
    this.size = ''
    this.weight = ''
      await this.$axios.$post('/api/articles/bestlaptops', {
        price: this.price
      })
      .then((response) => {
       this.articles = response
       this.$router.push({ to:'/#laptops' })
     })
   },
  async finditos(){
    this.battery = ''
    this.purpose = ''
    this.company = ''
    this.ram = ''
    this.storage = ''
    this.size = ''
    this.weight = ''
    await this.$axios.$post('/api/articles/bestlaptopsos', {
      os: this.os
    })
    .then((response) => {
     this.articles = response
     this.$router.push({ to:'/#laptops' })
   })
 },
 async finditpurpose(){
   this.os = ''
   this.price = ''
   this.battery = ''
   this.company = ''
   this.ram = ''
   this.storage = ''
   this.size = ''
   this.weight = ''
   await this.$axios.$post('/api/articles/bestlaptopspurpose', {
     reason: this.purpose
   })
   .then((response) => {
    this.articles = response
    this.$router.push({ to:'/#laptops' })
  })
},
async finditcompany(){
  this.os = ''
  this.price = ''
  this.purpose = ''
  this.battery = ''
  this.ram = ''
  this.storage = ''
  this.size = ''
  this.weight = ''
  await this.$axios.$post('/api/articles/bestlaptopscompany', {
    company: this.company
  })
  .then((response) => {
   this.articles = response
   this.$router.push({ to:'/#laptops' })
 })
},
linkcall(event){
  alert(this.articles.amazonlink)
  window.open(this.articles.amazonlink);
},
},
mounted:function(){
    this.findit() //method1 will execute at pageload
},
computed: {
  /* eslint-disable */
      totalPages: function() {
        if (this.resultCount == 0){
          return 1
        }
        else {
        return Math.ceil(this.resultCount / this.itemsPerPage)
      }
      },
      /* eslint-disable */
      paginate: function() {
          if (!this.articles || this.articles.length != this.articles.length) {
              return
          }
          this.resultCount = this.articles.length
          if (this.currentPage >= this.totalPages) {
            this.currentPage = this.totalPages
          }
          var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
          return this.articles.slice(index, index + this.itemsPerPage)
      }
  },
}
</script>

<style lang="css">
.current {
color: teal;
}
</style>
