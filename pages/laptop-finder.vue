<template lang="html">
    <div>
    <navbar />
<div class="w3-content" style="max-width:1400px">

<!-- Header -->
<header class="w3-container w3-center w3-padding-32">
  <h1><b>Laptop Finder</b></h1>
  <p class="w3-opacity"><i>A really simple laptop finder tool</i></p>
</header>

<!-- Grid -->
<div class="w3-row">
<p class="w3-justify w3-margin">With this really simple laptop finder tool. Just select the configuration you are looking for and our algorithm will go through our database bring out the best matching laptops for you. Our laptop finder tool is in growing phase, if have any suggestion regaridng the algorithm then do let us know. We will make all the required changes in our tool.</p>
<!-- Blog entries -->
<div class="w3-col l8 s12">
  <!-- Blog entry -->
  <div class="w3-card-4 w3-margin w3-white">
    <form class="w3-container">
      <section v-if="step == 1">
        <h2><br>
          Step 1 - Select a Size
        </h2>
        <input type="radio" id="10" value="10" v-model="size">
  <label for="10">10</label><br>
  <input type="radio" id="12" value="12" v-model="size">
  <label for="12">12</label><br>
  <input type="radio" id="14" value="14" v-model="size">
  <label for="14">14</label><br>
  <input type="radio" id="16" value="16" v-model="size">
  <label for="16">16</label><br>
  <input type="radio" id="all" value="all" v-model="size">
  <label for="all">All</label>
      </section>
      <section v-if="step == 2">
        <h2><br>
          Step 2 - Select Price
        </h2>
        <input type="radio" id="700" value="400" v-model="price">
      <label for="500">Below $400</label><br>
      <input type="radio" id="700" value="700" v-model="price">
      <label for="1000">Upto $700</label><br>
      <input type="radio" id="700" value="1000" v-model="price">
      <label for="1000">Upto $1000</label><br>
      <input type="radio" id="1500" value="5000" v-model="price">
      <label for="1500">no limit</label>
      <br>
      </section>
      <section v-if="step == 3">
        <h2><br>
          Step 3 - What's Your reason?
        </h2>
        <input type="radio" id="business" value="Business" v-model="reason">
  <label for="radio">Business</label><br>
  <input type="radio" id="Gaming" value="Gaming" v-model="reason">
  <label for="radio">Gaming</label><br>
  <input type="radio" id="Designing" value="Designing" v-model="reason">
  <label for="radio">Designing And Editing</label><br>
  <input type="radio" id="Student" value="Student" v-model="reason">
  <label for="radio">Student</label>
      </section>
      <section v-if="step == 4">
        <h2><br>
          Step 4 - Which OS you prefer?
        </h2>
        <input type="radio" id="chrome" value="Chrome" v-model="os">
  <label for="windows">Chrome OS</label><br>
        <input type="radio" id="windows" value="Windows" v-model="os">
  <label for="windows">Windows</label><br>
  <input type="radio" id="MAC" value="MAC" v-model="os">
  <label for="MAC">MACOS</label><br>
  <input type="radio" id="all" value="all" v-model="os">
  <label for="all">All</label><br>
      </section><br>
      <section v-if="step == 5">
        <h2>
          Step 5 - Do you prefer two in one Laptops?
        </h2>
        <input type="radio" id="" value="Yes" v-model="twoinone">
  <label for="radio">Yes</label><br>
  <input type="radio" id="" value="No" v-model="twoinone">
  <label for="radio">No</label><br>
  <input type="radio" id="all" value="all" v-model="twoinone">
  <label for="all">All</label>
  <br>
      </section>
      <button class="w3-margin-bottom w3-button w3-padding-large w3-white w3-border" v-if="step != totalsteps" @click.prevent="nextstep"><b>Next Step &raquo;</b></button>
      <button class="w3-margin-bottom w3-button w3-padding-large w3-white w3-border" v-if="step != 1" @click.prevent="previousstep"><b>&laquo; Previous Step</b></button>
      <button class="w3-margin-bottom w3-button w3-padding-large w3-white w3-border" v-if="step == 5" @click.prevent="findit"><b>Send Query &raquo;</b></button>
    </form>
  </div>
  <hr>

  <!-- Blog entry -->
  <div class="w3-card-4 w3-margin w3-white" id="found">
    <nuxt-link
      class="list-group-item list-group-item-action w3-card"
      :to="'/laptops/' + article._id"
      v-for="article in articles"
      :key="article._id">
        <img v-if="article.title != null" :src="require('~/assets/' + article.imgpath)" class="w3-half" style="width:140px; height:140px;">
      <h4>Name:{{ article.title }}</h4>
      <h5>Price:{{ article.price}}</h5>
      <h5>Reason:{{ article.reason }}</h5>
      <h5>Operating System:{{ article.os }}</h5>
      <h5>Is it two in one?{{ article.twoinone }}</h5>

    </nuxt-link>
      </div>
<!-- END BLOG ENTRIES -->
</div>

<!-- Introduction menu -->
<div class="w3-col l4">
  <!-- About Card -->
  <div class="w3-card w3-margin w3-margin-top">
    <div class="w3-container w3-white">
    <h3 class="w3-margin-top">Your Choices:</h3>
    <p> Laptop Size: <b>{{size}}</b></p>
    <p>Laptip Price: <b>{{price}}</b></p>
    <p>reason: <b>{{reason}}</b></p>
      <p>Operating System <b>{{os}}</b></p>
      <p>Two in One Laptops? <b>{{twoinone}}</b></p>
    </div>
    <div class="w3-container w3-white">
      <h4><b>My Name</b></h4>
      <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
    </div>
  </div><hr>

  <!-- Posts -->
  <div class="w3-card w3-margin">
    <div class="w3-container w3-padding">
      <h4>Popular Posts</h4>
    </div>
    <ul class="w3-ul w3-hoverable w3-white">
      <li class="w3-padding-16">
        <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">Lorem</span><br>
        <span>Sed mattis nunc</span>
      </li>
      <li class="w3-padding-16">
        <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">Ipsum</span><br>
        <span>Praes tinci sed</span>
      </li>
      <li class="w3-padding-16">
        <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">Dorum</span><br>
        <span>Ultricies congue</span>
      </li>
      <li class="w3-padding-16 w3-hide-medium w3-hide-small">
        <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">Mingsum</span><br>
        <span>Lorem ipsum dipsum</span>
      </li>
    </ul>
  </div>
  <hr>

<!-- END Introduction Menu -->
</div>

<!-- END GRID -->
</div><br>

<!-- END w3-content -->
</div>

<!-- Footer -->
<footer class="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
</footer></div>
</template>

<script>
import navbar from '~/components/navbar.vue'
export default {
  components: { navbar },
  data(){
    return{
      articles : [],
      step: 1,
      totalsteps: 5,
      size: 'all',
      reason: 'Business',
      price: '5000',
      os: 'all',
      twoinone: 'all'
  }
},
  methods: {
    nextstep()
        {
            this.step++;
        },
        previousstep()
        {
            this.step--;
        },
        async findit(){
          if(this.size == "all" && this.twoinone == "all" && this.os == "all"){
            alert("everything all")
            await this.$axios.$post('/api/articles/filterall', {
              reason: this.reason,
              price: this.price
            })
            .then((response) => {
              console.log(response)
             this.articles = response
             this.$router.push({ to:'/#laptops' })
           })
          }
          else if( this.size == "all" && this.os == "all"){
            alert("into size and os")
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
          else if(this.size == "all" && this.twoinone == "all") {
            alert("into size and two in one");
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
          else if(this.twoinone == "all" && this.os == "all"){
            alert("twoinone and os all");
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
          else if (this.size == "all") {
          alert("size all");
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
        else if(this.os == "all"){
          alert("os all")
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
          else if(this.twoinone == "all"){
            alert("two in one all")
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
          alert("given all information")
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
    alert("into second")
    const data = await this.$axios.$get('/api/articles/filtera')
    this.articles = data
  },
  async sendvalues()
  {
    alert("sending values")
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
