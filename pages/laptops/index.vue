<template lang="html">
  <div class="w3-light-grey">
  <div class="w3-bar w3-black w3-hide-small">
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-facebook-official"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-instagram"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-snapchat"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-flickr"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-twitter"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-linkedin"></i></a>
  <a href="#" class="w3-bar-item w3-button w3-right"><i class="fa fa-search"></i></a>
</div>

<!-- w3-content defines a container for fixed size centered content,
and is wrapped around the whole page content, except for the footer in this example -->
<div class="w3-content" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>List of Laptops: Choose the best suitable laptop</h1>
          <span class="w3-opacity">Jan 2, 2020</span><em class="w3-opacity"> by </em><strong>Adam Johnson</strong><em class="w3-opacity">  In </em><strong>Budget Laptops</strong>
          <hr>
          <p>Shop the best laptop as per your requirement. Filter the best laptops as per your budget, the company you prefer, operating system you are comfortable with and the kind of tasks you are going to perform on this laptop. Accelerate everything you do on a laptop by selecting the perfect laptop as per your profession with ease. Compare different brands in the least amount of time.</p>
          <p>If you want to comare different laptps, you can visit <nuxt-link to="/compare-laptops/">this link</nuxt-link> to compare all the features and specifications. If you want more customization in the laptop search then you can visit our laptop compare tool.</p><hr>
            <h2>
              Filter Laptops
            </h2><br>
            <select v-model="price" @change.prevent="findit">
    <option disabled value="">Please Select Price</option>
    <option value="100">Under 100</option>
    <option value="200">Under 200</option>
    <option value="300">Under 300</option>
    <option value="400">Under 400</option>
    <option value="500">Under 500</option>
    <option value="600">Under 600</option>
    <option value="700">Under 700</option>
    <option value="800">Under 800</option>
    <option value="1000">Under 1000</option>
    <option value="1500">Under 1500</option>
    <option value="5000">No Limit</option>
  </select>
          <select v-model="os" @change.prevent="finditos">
  <option disabled value="">Select OS</option>
  <option>macOS</option>
  <option>Windows</option>
  <option>Chrome</option>
  <option>all</option>
</select>
<select v-model="purpose" @change.prevent="finditpurpose">
<option disabled value="">What's Your Purpose?</option>
<option value="Gaming">Gaming</option>
<option value="generalpurpose">General Purpose</option>
<option value="all-purpose">All-purpose</option>
<option value="writing">Writing</option>
<option value="programming">Programming</option>
<option value="musicproduction">Music Production</option>
</select>
<select v-model="company" @change.prevent="finditcompany">
<option disabled value="">Preferred company</option>
<option>HP</option>
<option>Dell</option>
<option>Lenovo</option>
<option>Apple</option>
<option>Samsung</option>
</select>
          <div class="w3-margin w3-white" id="found"><hr>
          <div v-for="article in articles"
            :key="article._id">
            <ul class="w3-ul w3-hoverable w3-white w3-card">
              <li class="w3-padding-16">
                <img v-if="article.title != null" :src="require('~/assets/' + article.imgpath)" alt="Image" class="w3-left w3-margin-right" style="width:100px; height:100px">
                <nuxt-link style="color: black" :to="'/laptops/' + article._id"><span class="w3-large">{{ article.title }},</span></nuxt-link>
                <br>
                <div class="w3-right">
                  <h3>${{article.price}}</h3>
                </div>
                <span>{{ article.os }} OS,</span><br>
                <span>{{ article.ram }} RAM,</span><br>
                <span>{{ article.storage }} Storage,</span><br>
                <span>{{ article.size }} inches,</span><br>
                <b><span><a :href="article.amazonlink">Buy Now</a></span></b>
              </li><hr>
            </ul>
          </div>
              </div>
              <h3>Best Affordable Laptops</h3>

          <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
          <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
          <p class="w3-clear"></p></div></div>
    </div>

    <!-- About/Information menu -->
    <div class="w3-col l4">
      <div class="w3-white w3-margin">
      <div class="w3-container w3-padding w3-black">
        <h4>Related Posts</h4>
      </div>
      <ul class="w3-ul w3-hoverable w3-white">
        <li class="w3-padding-16">
          <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:40px">
          <nuxt-link style="color: black" to="/under-100-dollars/"><span class="w3-large">Laptops Under 100 Dollars</span></nuxt-link>
          <br>
        </li>
        <li class="w3-padding-16">
          <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:40px">
          <nuxt-link style="color: black" to="/under-200-dollars/"><span class="w3-large">Laptops Under 200 Dollars</span></nuxt-link>
          <br>
        </li>
        <li class="w3-padding-16">
          <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:40px">
          <nuxt-link style="color: black" to="/under-300-dollars/"><span class="w3-large">Best Laptops Under 300 Dollars</span></nuxt-link>
          <br>
        </li>
        <li class="w3-padding-16">
          <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right w3-sepia" style="width:40px">
          <nuxt-link style="color: black" to="/under-400-dollars/"><span class="w3-large">Laptops Under 400 Dollars</span></nuxt-link>
          <br>
        </li>
      </ul>
    </div>
      <hr>

      <div class="w3-white w3-margin">
      <div class="w3-container w3-padding w3-black">
        <h4>Trending Laptops</h4>
      </div>
      <ul class="w3-ul w3-hoverable w3-white">
        <li class="w3-padding-16">
          <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <nuxt-link style="color: black" to="/cheap-laptops-under-100-dollars"><span class="w3-large">Cheap Laptops Under 100 Dollars</span></nuxt-link>
          <br>
          <span>Sed mattis nunc</span>
        </li>
        <li class="w3-padding-16">
          <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Cheap Laptops Under 300 Dollars</span>
          <br>
          <span>Praes tinci sed</span>
        </li>
        <li class="w3-padding-16">
          <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Cheap Laptops Under 400 Dollars</span>
          <br>
          <span>Ultricies congue</span>
        </li>
        <li class="w3-padding-16">
          <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right w3-sepia" style="width:50px">
          <span class="w3-large">Cheap Laptops Under 500 Dollars</span>
          <br>
          <span>Lorem ipsum dipsum</span>
        </li>
      </ul>
    </div>
      <hr>
    <!-- Advertising -->
      <div class="w3-white w3-margin">
        <div class="w3-container w3-padding w3-black">
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
        <div class="w3-container w3-padding w3-black">
          <h4>Follow Me</h4>
        </div>
        <div class="w3-container w3-xlarge w3-padding">
          <i class="fa fa-facebook-official w3-hover-opacity"></i>
          <i class="fa fa-instagram w3-hover-opacity"></i>
          <i class="fa fa-snapchat w3-hover-opacity"></i>
          <i class="fa fa-pinterest-p w3-hover-opacity"></i>
          <i class="fa fa-twitter w3-hover-opacity"></i>
          <i class="fa fa-linkedin w3-hover-opacity"></i>
        </div>
      </div>
      <hr>

      <!-- Subscribe -->
      <div class="w3-white w3-margin">
        <div class="w3-container w3-padding w3-black">
          <h4>Subscribe</h4>
        </div>
        <div class="w3-container w3-white"><br>
          <p>Enter your e-mail below and get notified on the latest blog posts.</p><br>
          <p><input class="w3-input w3-border" type="text" placeholder="Enter e-mail" style="width:100%"></p><br>
          <p><button type="button" class="w3-button w3-block w3-red">Subscribe</button></p><br>
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

export default {
components: { 'footer-app': footer },
data() {
  return {
    price: '1500',
    articles: [],
    os: '',
    purpose: '',
    company: ''
  }
},
methods: {
  async findit(){
    this.os = ''
      await this.$axios.$post('/api/articles/bestlaptops', {
        price: this.price
      })
      .then((response) => {
       this.articles = response
       this.$router.push({ to:'/#laptops' })
     })
   },
  async finditos(){
    alert(this.os);
    this.price = ''
    await this.$axios.$post('/api/articles/bestlaptopsos', {
      os: this.os
    })
    .then((response) => {
     this.articles = response
     this.$router.push({ to:'/#laptops' })
   })
 },
 async finditpurpose(){
   alert(this.purpose);
   this.price = ''
   this.os = ''
   await this.$axios.$post('/api/articles/bestlaptopspurpose', {
     reason: this.purpose
   })
   .then((response) => {
    this.articles = response
    this.$router.push({ to:'/#laptops' })
  })
},
async finditcompany(){
  alert(this.company);
  this.price = ''
  this.os = ''
  this.purpose = ''
  await this.$axios.$post('/api/articles/bestlaptopscompany', {
    company: this.company
  })
  .then((response) => {
   this.articles = response
   this.$router.push({ to:'/#laptops' })
 })
}
},
mounted:function(){
    this.findit() //method1 will execute at pageload
}
}
</script>

<style lang="css">
</style>
