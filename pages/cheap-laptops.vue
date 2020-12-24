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
          <h1>Choose Best Cheap Laptops</h1>
          <span class="w3-opacity">Dec 22, 2020</span><em class="w3-opacity"> by </em><strong style="color: blue">Denzel Vieta</strong>
          <hr>
          <p>In this article, we bring you the best cheap laptops. There are some inexpensive laptops available in the market today that are capable of getting the job done quickly. Select the price that and we will get you the best cheap laptops from our database. Remember one thing, all the affordable laptops won't be able to pull out all the tasks/load that you throw at it. The inexpensive laptops are not as good at performance as all the other gaming laptops. But the laptops on this list are capable of performing all the daily tasks smoothly.</p>
          <p>If you want more customization options then you can visit our <nuxt-link to="/laptop-finder/" style="color: blue">laptop finder tool</nuxt-link>. With this tool, you can customize price, operating system, laptop size and purpose.</p><hr>
          <div>
          <section>
            <h2>
              Select Cheap Laptop Price
            </h2>
            <input type="radio" id="10" value="100" v-model="price">
      <label for="10">Under 100</label><br>
      <input type="radio" id="12" value="200" v-model="price">
      <label for="12">Under 200</label><br>
      <input type="radio" id="14" value="300" v-model="price">
      <label for="14">Under 300</label><br>
      <input type="radio" id="16" value="400" v-model="price">
      <label for="16">Under 400</label><br>
      <input type="radio" id="all" value="500" v-model="price">
      <label for="all">Under 500</label><br>
      <b><p>Or Add Custom Value: <input type="text" v-model="price" style="color: blue" placeholder="Or Enter a custom value" /></p></b>
      <button class="w3-margin-bottom w3-button w3-padding-large w3-teal w3-border" @click.prevent="findit"><b>Get Laptops &raquo;</b></button>
          </section>
        </div>
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

              <h3>How Much Do I Need to Spend for Cheap Laptops?</h3>
              <p>If you are looking for a laptop for daily use and you are not concerned about the designs or looks then you can buy a good laptop at a very affordable price. The price would be below 500 dollars. Today, multiple well-known companies are building some of the best cheap laptops which are equipped to provide great performance. You do not need to spend thousands of dollars just to perform daily work. You will find multiple all-purpose laptops here on this list.
</p><hr>
              <h2>Best Cheap Laptops</h2>
              <h3>Acer Aspire 5</h3>
              <img src="../assets/Acer_Aspire_5.jpg" class="w3-margin w3-padding" alt="Acer Aspire 5" style="width: 80%"><br>
              <p>With good performance, 8 hours of battery life, and an intel core i-3 processor, Acer Aspire 5 comes at just $399. Apart from that, it offers 8 GB of RAM and 256 GB storage. With these features, Acer Aspire 5 deserves to be on this list. If you are looking for an all-purpose cheap laptop then you can choose this laptop. This machine is not receiving good reviews when it comes to graphics and display.</p><hr>
              <h3>HP 15</h3>
              <img src="../assets/hp_15.jpg" class="w3-margin w3-padding" alt="HP 15" style="width: 80%"><br>
              <p>If you are looking for a cheap laptop with a huge storage capacity then HP 15 is the right option for you. HP 15 offers 1 TB storage and 8 GB RAM, it is not usual for a machine just around $450. With AMD Ryzen processor, it is a powerful performer.</p>
              <p>The battery life of this machine is not impressive, it lasts just below 5 hours. Choose this laptop if you are a fan of the AMD Ryzen processor and require a lot of internal storage to save your data.</p><hr>
              <h3>Dell Inspiron 15 3000</h3>
              <img src="../assets/Dell_Inspiron_15.jpg" class="w3-margin w3-padding" alt="Dell Inspiron 15 3000" style="width: 80%"><br>
              <p>This is a great performer for day-to-day tasks. Dell Inspiron 15 can be considered as a general-purpose laptop. It offers 4 GB of RAM and 1 TB storage and an Intel Celeron processor. On this machine, you can perform regular daily tasks and store a lot of data. Just like HP 11, you can buy this laptop if you are dealing with a lot of data and requires a lot of storage on your machine.</p><hr>
              <h3>Lenovo Chromebook C340-11</h3>
              <img src="../assets/Lenovo_Chromebook_C340-11.jpg" class="w3-margin w3-padding" alt="Lenovo Chromebook C340-11" style="width: 80%"><br>
              <p>Chromebook laptops are often way cheaper but great performers at the same time. Lenovo Chromebook C340 is an inexpensive laptop but a good performer comes with a long-lasting battery of 10-hours. Apart from that, it offers 4GB RAM, 64GB storage, and an Intel Celeron N4000 processor. With just an 11.6 inch screen, you can carry this laptop easily while traveling.</p><hr>
              <h3>Lenovo Ideapad 1</h3>
              <img src="../assets/Lenovo_Ideapad_1.jpg" class="w3-margin w3-padding" alt="Lenovo Ideapad 1" style="width: 80%"><br>
              <p>This is a good all-purpose laptop that offers 4 GB RAM, 64 GB storage, AMD A6-9220E processor, and AMD Radeon graphics. With professional design and good battery life, this machine can be a great choice for college students and businessmen. Dolly audio at such a cheap budget is a plus.</p><hr>
              <h3>Samsung Chromebook 4</h3>
              <img src="../assets/Samsung_Chromebook_4.jpg" class="w3-margin w3-padding" alt="Samsung Chromebook 4" style="width: 80%"><br>
              <p>Samsung Chromebook 4 is one of the cheapest laptops that is a good performer at the same time. It costs just around $229 but you won't be compromising on the performance. For 229 dollars, you get an 11.6 inches screen, 32 GB of storage, and 4 GB RAM. Along with performance, battery life is also a plus of this laptop. The battery of Samsung Chromebook 4 lasts around 9 hours. If you need a laptop with more storage and RAM, you can add a few bucks more and get a bigger machine with more storage and RAM.</p><hr>
          </div></div>
    </div>

    <!-- About/Information menu -->
    <div class="w3-col l4">
      <div class="w3-white w3-margin">
      <div class="w3-container w3-padding w3-teal">
        <h4>Related Posts</h4>
      </div>
      <ul class="w3-ul w3-hoverable w3-white">
        <li class="w3-padding-16">
          <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <nuxt-link style="color: black" to="/under-100-dollars/"><span class="w3-large">Cheap Laptops Under 100 Dollars</span></nuxt-link>
          <br>
          <span>Kids</span>
        </li>
        <li class="w3-padding-16">
          <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <nuxt-link to="/under-300-dollars/" style="color: black"> <span class="w3-large">Laptops Under 300 Dollars</span></nuxt-link>
          <br>
          <span>General-purpose</span>
        </li>
        <li class="w3-padding-16">
          <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <nuxt-link to="/under-400-dollars/" style="color: black"><span class="w3-large">Cheap Laptops Under 400 Dollars</span></nuxt-link>
          <br>
          <span>General-purpose</span>
        </li>
        <li class="w3-padding-16">
          <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <nuxt-link to="/under-500/" style="color: black;"><span class="w3-large">Cheap Laptops Under 500 Dollars</span></nuxt-link>
          <br>
          <span>All-purpose</span>
        </li>
      </ul>
    </div>
      <hr>

      <popularposts />
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
        <div class="w3-container w3-padding w3-teal">
          <h4>Subscribe</h4>
        </div>
        <div class="w3-container w3-white"><br>
          <p>Enter your e-mail below and get notified on the latest blog posts.</p><br>
          <p><input class="w3-input w3-border" type="text" placeholder="Enter e-mail" style="width:100%"></p><br>
          <p><button type="button" class="w3-button w3-block w3-teal">Subscribe</button></p><br>
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
      <button type="button" class="w3-button w3-block w3-padding-large w3-teal w3-margin-bottom" onclick="document.getElementById('subscribe').style.display='none'">Subscribe</button>
    </div>
  </div>
</div>

<!-- Footer -->
<footer-app />

  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
import popularposts from '~/components/popularposts.vue'
import footer from '~/components/footer.vue'
export default {
  head() {
  // sets document title
  return {
  title: 'Cheap Laptops collection 2020',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Cheap Laptops' }
  ],
  link: [
  {rel: 'canonical', href: 'https://bestbudgetlaptop.net/cheap-laptops/'}
  ]
  }
  },
components: { navbar, 'footer-app': footer, popularposts },
data() {
  return {
    price: '460',
    articles: [],
    searchKey: '',
  currentPage: 1,
  itemsPerPage: 10,
  resultCount: 0
  }
},
methods: {
    async findit(){
      await this.$axios.$post('/api/articles/cheap100', {
        price: this.price
      })
      .then((response) => {
        console.log(response)
       this.articles = response
       this.$router.push({ to:'/#laptops' })
     })
   },
   setPage: function(pageNumber) {
       this.currentPage = pageNumber
     },
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
mounted:function(){
    this.findit() //method1 will execute at pageload
}
}
</script>

<style lang="css" scoped>
.current {
color: teal;
}
</style>
