<template lang="html">
    <div>
    <navbar />
<div class="w3-light-grey">
<div class="w3-content w3-margin-top" style="max-width:1400px;">

  <!-- The Grid -->
  <div class="w3-row-padding">
    <!-- Left Column -->

    <!-- Right Column -->
    <div class="w3-twothird">

      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-laptop fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Laptop Finder</h2>
        <div class="w3-container" v-if="step == 1">
          <h5 class="w3-opacity"><b>Step 1 - Select a Size</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Tool Last Updated <span class="w3-tag w3-teal w3-round">March, 24 2021</span></h6>
          <p>The average size of a laptop is around 11-12 inches. If you are a frequent traveler and often carry a laptop while traveling then we would recommend you choose a smaller laptop.</p>
          <hr>
            <input type="radio" id="10" value="10" v-model="size">
      <label for="10">10</label><br>
      <input type="radio" id="12" value="12" v-model="size">
      <label for="12">12</label><br>
      <input type="radio" id="14" value="14" v-model="size">
      <label for="14">14</label><br>
      <input type="radio" id="16" value="16" v-model="size">
      <label for="16">16</label><br>
      <input type="radio" id="No Preference" value="No Preference" v-model="size">
      <label for="No Preference">All</label>
        </div>
        <div class="w3-container" v-if="step == 2">
            <h5 class="w3-opacity"><b>Step 2 - Select Price</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Tool Last Updated <span class="w3-tag w3-teal w3-round">March, 24 2021</span></h6>
            <p>The price of a laptop is directly proportional to the features and specifications. A laptop with more advanced specs is way costlier. For general purposes, you can find a good laptop at around $700.</p>
            <hr>
            <input type="radio" id="700" value="400" v-model="price">
          <label for="500">Below $400</label><br>
          <input type="radio" id="700" value="700" v-model="price">
          <label for="1000">Upto $700</label><br>
          <input type="radio" id="700" value="1000" v-model="price">
          <label for="1000">Upto $1000</label><br>
          <input type="radio" id="1500" value="5000" v-model="price">
          <label for="1500">no limit</label>
        </div>

        <div class="w3-container" v-if="step == 3">
            <h5 class="w3-opacity"><b>Step 3 - What's Your reason?</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Tool Last Updated <span class="w3-tag w3-teal w3-round">March, 24 2021</span></h6>
            <p>Gaming, Video/Audio Editing, and Music production laptops are way costly. Programming, Business, and college laptops are less costly while general-purpose laptops are the cheapest.</p>
            <hr>
            <input type="radio" id="General-purpose" value="General-purpose" v-model="reason">
      <label for="radio">General-purpose</label><br>
      <input type="radio" id="All-purpose" value="All-purpose" v-model="reason">
    <label for="radio">All-purpose</label><br>
            <input type="radio" id="Business" value="Business" v-model="reason">
      <label for="radio">Business</label><br>
      <input type="radio" id="Gaming" value="Gaming" v-model="reason">
      <label for="radio">Gaming</label><br>
      <input type="radio" id="Programming" value="Programming" v-model="reason">
      <label for="radio">Programming</label>
          </div>

          <div class="w3-container" v-if="step == 4">
              <h5 class="w3-opacity"><b>Step 4 - Which OS you prefer?</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Tool Last Updated <span class="w3-tag w3-teal w3-round">March, 24 2021</span></h6>
              <p>There are three major operating systems, ChromeOS, Windows, and macOS. ChromeOS laptops are way cheaper than the Windows and macOS. If you are looking for a laptop with general-purpose then ChromeOS is the right choice.</p>
              <hr>
              <input type="radio" id="Chrome" value="Chrome" v-model="os">
        <label for="Chrome">Chrome OS</label><br>
              <input type="radio" id="Windows" value="Windows" v-model="os">
        <label for="Windows">Windows</label><br>
        <input type="radio" id="macOS" value="macOS" v-model="os">
        <label for="macOS">macOS</label><br>
        <input type="radio" id="No Preference" value="No Preference" v-model="os">
        <label for="No Preference">No Preference</label>
            </div>

            <div class="w3-container" v-if="step == 5">
                <h5 class="w3-opacity"><b>Step 5 - Do you prefer TOuch screen Laptops?</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Tool Last Updated <span class="w3-tag w3-teal w3-round">March, 24 2021</span></h6>
                <p>Touch screen laptop offer both touchscreen and keyboard. Most of the businessmen who have to carry laptops while traveling prefer two in one laptop. Also, Students who do group projects select these laptops.</p>
                <hr>
                <input type="radio" id="" value="Yes" v-model="twoinone">
          <label for="radio">Yes</label><br>
          <input type="radio" id="" value="No" v-model="twoinone">
          <label for="radio">No</label><br>
          <input type="radio" id="No Preference" value="No Preference" v-model="twoinone">
          <label for="No Preference">All</label>
              </div>
        <button class="w3-margin-bottom w3-button w3-padding-large w3-teal w3-border" v-if="step != totalsteps" @click.prevent="nextstep"><b>Next Step &raquo;</b></button>
        <button class="w3-margin-bottom w3-button w3-padding-large w3-teal w3-border" v-if="step != 1" @click.prevent="previousstep"><b>&laquo; Previous Step</b></button>
        <button class="w3-margin-bottom w3-button w3-padding-large w3-teal w3-border" v-if="step == 5" @click.prevent="findit(); scrollMeTo('porto')"><b>Send Query &raquo;</b></button>
        <p></p>
      </div>

      <div class="w3-container w3-card w3-white fl-porto" ref="porto"><br>
        <div class="container w3-white w3-card" v-for="article in articles"
          :key="article._id"><br>
<div class="row">
<div class="col-sm-4">
<img v-if="article.title != null" :src="require('~/assets/' + article.imgpath)" style="width:100px; height:100px">
</div>
<div class="col-sm-4">

<h5><nuxt-link style="color: black" :to="'/laptops/' + article._id"><span class="w3-large w3-text-teal">{{ article.title }},</span></nuxt-link></h5>
<span>OS: {{article.os}}</span><br>
<span>{{article.size}} Inches</span><br>
<span>{{article.ram}} GB</span><br>
<span v-if="article.storage >= 1000">{{ article.storage/1000 }} TB Storage,</span>
<span v-else>{{ article.storage }} GB Storage,</span><br>
</div>
<div class="col-sm-4">
<h3>${{article.price}}</h3>
<p><a :href="article.amazonlink"><button class="w3-button w3-block w3-teal">Buy Now</button></a></p>
</div>
</div><hr>
</div>
      </div>
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1 class="w3-text-teal">How to use this laptop fider tool by specs?</h1>
        <p>Welcome to the simple yet effective laptop finder tool. Here, just enter the specifications you require and get the perfect laptops for your usage. The best way to use this tool properly is to enter the most accurate feature that you require in a laptop. Here, we will discuss each option in the list in detail so that you can have a detailed indea about using this laptop selection tool.</p><br>
        <h3>Determine your purpose</h3>
        <p>The best way to find an appropriate laptop is to first determine your purpose behind buying a laptop. For example, if you are buying a laptop for daily use, excel sheet updating, watching movies, schools then you do not need to spend a lot of money in your laptop. You can just select the option value "General Purpose". Normally, high performing machine is required for programming, music production, gaming and photography. If you do not fining a laptop for these reasons then you can just opt for the All-purpose laptop option in the finder.</p>
        <h3>Select Budget</h3>
        <p>Selecting budget is also important. The budget of a laptop is directly proposanal to the performance, memory and ram of a laptop. You need the budget of around $200-500 for the general purpose laptop and $500-$1000 for the All-purpose, business, students and writers laptop. If you are using a laptop for music, gaming, video production or designing then you need to spend more money to get the desired laptop. We have a collection of the <nuxt-link style="color: teal" to="/"><span>best budget laptop</span></nuxt-link>, you can check if you are looking for the budget laptops.</p>
        <h3>Laptop size</h3>
        <p>The laptop size does not really affect the budget of your laptop. But in case you are a frequent traveler and you carry your laptop while traveling then we would highly recommend you select a laptop size of around 10-12 inches. Because these laptops are smaller in size and their weight is lesser then the other big laptops so, it might get  easier for you to carry small laptops while traveling.</p>
      </div>
      </div>

    <!-- End Right Column -->
    </div>
    <div class="w3-third">

      <div class="w3-white w3-text-grey w3-card-4">

        <div class="w3-display-container">
          <img src="~/assets/laptop.jpg" style="width:100%" alt="Laptop finder">
          <div class="w3-display-bottomleft w3-container w3-text-black">
            <h2>YOUR SELECTION</h2>
          </div>
        </div>
        <div class="w3-container">
          <p><i class="fa fa-laptop fa-fw w3-margin-right w3-large w3-text-teal"></i>Laptop Size: <b>{{size}}</b></p>
          <p><i class="fa fa-money fa-fw w3-margin-right w3-large w3-text-teal"></i>Laptop Price: <b>{{ price }}</b></p>
          <p><i class="fa fa-file-powerpoint-o fa-fw w3-margin-right w3-large w3-text-teal"></i>Buying Purpose: <b>{{ reason }}</b></p>
          <p><i class="fa fa-laptop fa-fw w3-margin-right w3-large w3-text-teal"></i>OS: <b>{{ os }}</b></p>
          <p><i class="fa fa-laptop fa-fw w3-margin-right w3-large w3-text-teal"></i>Touchscreen: <b>{{ twoinone }}</b></p>
          <hr>

          <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Rating & Review</b></p>
          <p>User's Rating</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:71%">71%</div>
          </div>
          <p>Tool's Accuracy</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:74%">
              <div class="w3-center w3-text-white">74%</div>
            </div>
          </div>
          <br>

          <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Add Your Review</b></p>
          <div class="" v-if="review === 'yea'">
            <select v-model="percentage" style="width: 100%">
        <option disabled value="70%">70%</option>
        <option>10%</option>
        <option>20%</option>
        <option>40%</option>
        <option>60%</option>
        <option>80%</option>
        <option>90%</option>
        <option>100%</option>
      </select><br><br>
            <input type="text" name="" value="" placeholder="Enter your review" style="width: 100%"><br><br>
            <button class="w3-margin-bottom w3-button w3-padding-large w3-teal w3-border" @click.prevent="percentclick"><b>Send Review</b></button>
          </div>
          <div class="" v-if="review === 'yea1'">
            <h1>Thanks for your review.</h1>
          </div>
          <br>
        </div>
      </div><br>

    <!-- End Left Column -->
    </div>

  <!-- End Grid -->
  </div>

  <!-- End Page Container -->
</div>
</div>
<!-- Footer -->
<footer-app />  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
import footer from '../components/footer.vue'

export default {
  head() {
  // sets document title
  return {
  title: 'Laptop finder tool | Enter your specifications and get laptops',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Laptop finder.' },
      { hid: 'keywords', name: 'keywords', content: 'Laptop finder' }
  ],
  link: [
  {rel: 'canonical', href: 'https://bestbudgetlaptop.net/laptop-finder'}
  ]
  }
  },
  components: { navbar, 'footer-app': footer },
  data(){
    return{
      articles : [],
      step: 1,
      totalsteps: 5,
      size: 'No Preference',
      reason: 'General-purpose',
      price: '5000',
      os: 'No Preference',
      twoinone: 'No Preference',
      review: 'yea',
      percentage: ''
  }
},
  methods: {
    scrollMeTo(refName) {
    var element = this.$refs[refName];
    var top = element.offsetTop;

    window.scrollTo(0, top);
  },
  percentclick(){
    this.review = 'yea1';
  },
    nextstep()
        {
            this.step++;
        },
        previousstep()
        {
            this.step--;
        },
        async findit(){
          if(this.size == "No Preference" && this.twoinone == "No Preference" && this.os == "No Preference"){
            await this.$axios.$post('/api/articles/filterall', {
              reason: this.reason,
              price: this.price
            })
            .then((response) => {
             this.articles = response
             this.$router.push({ to:'/#laptops' })
           })
          }
          else if( this.size == "No Preference" && this.os == "No Preference"){
            await this.$axios.$post('/api/articles/filtertwo', {
              reason: this.reason,
              price: this.price,
              twoinone: this.twoinone
            })
            .then((response) => {
              console.log(response)
             this.articles = response
           })
          }
          else if(this.size == "No Preference" && this.twoinone == "No Preference") {
            await this.$axios.$post('/api/articles/filterone', {
              reason: this.reason,
              price: this.price,
              os: this.os
            })
            .then((response) => {
              console.log(response)
             this.articles = response
           })
          }
          else if(this.twoinone == "No Preference" && this.os == "No Preference"){
            await this.$axios.$post('/api/articles/filterthree', {
              reason: this.reason,
              price: this.price,
              size: this.size
            })
            .then((response) => {
              console.log(response)
             this.articles = response
           })
          }
          else if (this.size == "No Preference") {
          await this.$axios.$post('/api/articles/filterfour', {
            reason: this.reason,
            price: this.price,
            twoinone: this.twoinone,
            os: this.os
          })
          .then((response) => {
            console.log(response)
           this.articles = response
         })
        }
        else if(this.os == "No Preference"){
          await this.$axios.$post('/api/articles/filterfive', {
            reason: this.reason,
            price: this.price,
            twoinone: this.twoinone,
            size: this.size
          })
          .then((response) => {
            console.log(response)
           this.articles = response
         })
        }
          else if(this.twoinone == "No Preference"){
            await this.$axios.$post('/api/articles/filtersix', {
              reason: this.reason,
              price: this.price,
              os: this.os,
              size: this.size
            })
            .then((response) => {
              console.log(response)
             this.articles = response
           })
          }
        else {
          await this.$axios.$post('/api/articles/filtersev', {
            reason: this.reason,
            price: this.price,
            os: this.os,
            size: this.size,
            twoinone: this.twoinone
          })
          .then((response) => {
            console.log(response)
           this.articles = response
         })
        }
      },
  async secondbutton()
  {
    const data = await this.$axios.$get('/api/articles/filtera')
    this.articles = data
  },
  async sendvalues()
  {
   await this.$axios.$post('/api/articles/filter', {
     author: this.author
   })
   .then((response) => {
    this.articles = response
  })
  }
}
}
</script>

<style lang="css">
</style>
