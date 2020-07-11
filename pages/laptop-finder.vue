<template lang="html">
  <client-only>
    <div>
    <navbar />
<div class="w3-margin w3-padding">
<div class="w3-third">
  <form>
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
<label for="radio">Designing And Editing</label>
<input type="radio" id="Student" value="Student" v-model="reason">
<label for="radio">Student</label>
    </section>
    <section v-if="step == 4">
      <h2><br>
        Step 4 - Which OS you prefer?
      </h2>
      <input type="radio" id="windows" value="Windows" v-model="os">
<label for="windows">Windows</label><br>
<input type="radio" id="MAC" value="MAC" v-model="os">
<label for="MAC">MACOS</label><br>
<input type="radio" id="all" value="all" v-model="os">
<label for="all">All</label><br>
    </section><br>
    <section v-if="step == 5">
      <h2><br>
        Step 5 - Do you prefer two in one Laptops?
      </h2>
      <input type="radio" id="" value="Yes" v-model="twoinone">
<label for="radio">Yes</label>
<input type="radio" id="" value="No" v-model="twoinone">
<label for="radio">No</label>
<input type="radio" id="all" value="all" v-model="twoinone">
<label for="all">All</label>
<br>
    </section>
    <button v-if="step != totalsteps" @click.prevent="nextstep">Next Step</button>
    <button v-if="step != 1" @click.prevent="previousstep">Previous Step</button>
    <button v-if="step == 5" @click.prevent="findit">Send Query</button>
  </form>
</div><br><br>
<div class="w3-third">
  <h3>Your Choices:</h3>
  <p> Laptop Size: {{size}}</p>
  <p>Laptip Price: {{price}}</p>
  <p>reason: {{reason}}</p>
    <p>Operating System {{os}}</p>
    <p>Selected O.S: {{twoinone}}</p>
</div>
<div class="w3-white w3-third">
  <div class="w3-container w3-black">
    <h4>Advertise</h4>
  </div>
  <div class="w3-container w3-white">
    <div class="w3-container w3-display-container w3-light-grey w3-section" style="height:200px">
      <span class="w3-display-middle">AD</span>
    </div>
  </div>
</div>
<br><br>
<div>
  <h1>Laptops Found:</h1><br>
<nuxt-link
  class="list-group-item list-group-item-action w3-card"
  :to="'/laptops/' + article._id"
  v-for="article in articles"
  :key="article._id">
  <h4>Name:{{ article.title }}</h4><br>
  <h5>Price:{{ article.price}}</h5>
  <h5>Reason:{{ article.reason }}</h5>
  <h5>Operating System:{{ article.os }}</h5>
  <h5>Is it two in one?{{ article.twoinone }}</h5>
</nuxt-link>
<h1>Articles for {{ reason }}</h1><br>
<h1>hi</h1>
</div>
</div>
</div>
</client-only>
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
      size: '',
      reason: '',
      price: '',
      os: '',
      twoinone: ''
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
