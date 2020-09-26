<template lang="html">
  <div>
  <div>
    <navbar /><br>
    <div class="d-flex justify-content-between">
      <div>
        <nuxt-link :to="'/laptops/' + article._id + '/update'" v-if="$auth.loggedIn" class="btn btn-primary mr-3">Update</nuxt-link>
        <button v-if="$auth.loggedIn" class="btn btn-danger" @click="deleteRecord()">Delete</button>
      </div>
      <nuxt-link to="/laptops" class="btn btn-secondary mr-3">Back to Laptops</nuxt-link>
    </div>
    <div class="alert alert-success"
      v-if="$route.params.updated=='yes'">Record updated successfully</div><br>

<!-- Grid -->
<div class="w3-row">

<!-- Blog entries -->
<div class="w3-col l8 s12">
  <!-- Blog entry -->
  <div class="w3-card-4 w3-margin w3-white">
    <div class="w3-container"><br>
      <h3><b>{{article.title}}</b></h3>
      <h5><a :href="article.amazonlink">Buy Now</a></h5>
    </div>

    <div class="w3-container">
      <p>{{article.body}}</p>
      <div class="">
        <p>{{article.para2}}</p>
        <p>{{article.para3}}</p>
        <p>{{article.design}}</p>
      </div>
      <div class="w3-row">
        <div class="w3-col m8 s12">
          <p><button @click="linkcall" class="w3-button w3-padding-large w3-white w3-border"><b>Buy Now &raquo;</b></button></p>
        </div>
        </div>
    </div>
  </div>
  <hr>
<!-- END BLOG ENTRIES -->
</div>

<!-- Introduction menu -->
<div class="w3-col l4">
  <!-- About Card -->
  <div class="w3-card w3-margin w3-margin-top ex2">
  <img :src="require('~/assets/' + article.imgpath)" style="width:100%">
    <div class="w3-container w3-white" style="width:100%">
      <h4><b>{{article.title}} Configuration</b></h4>
      <client-only>
      <table style="width:100%">
        <tr>
          <th>Buy Now</th>
          <th><button @click="linkcall" type="button" name="button">Buy Now</a></button></th>
        </tr>
        <tr>
          <td>Specifications</td>
          <td>Content</td>
        </tr>
        <tr>
          <td>Note</td>
          <td>{{article.note}}</td>
        </tr>
        <tr>
          <td>Company</td>
          <td>{{article.company}}</td>
        </tr>
        <tr>
          <td>GPU</td>
          <td>{{article.gpu}}</td>
        </tr>
        <tr>
          <td>price</td>
          <td>{{article.price}}</td>
        </tr>
        <tr>
          <td>Best Works For</td>
          <td>{{article.reason}}</td>
        </tr>
        <tr>
          <td>Operating System</td>
          <td>{{article.os}}</td>
        </tr>
        <tr>
          <td>Size</td>
          <td>{{article.size}}</td>
        </tr>
        <tr>
          <td>Is it two in one?</td>
          <td>{{article.twoinone}}</td>
        </tr>
        <tr>
          <td>storage</td>
          <td v-if="article.storage >= '1000'">{{article.storage/1000}} TB</td>
          <td v-else>{{article.storage}} GB</td>
        </tr>
        <tr>
          <td>Display</td>
          <td>{{article.display}}</td>
        </tr>
        <tr>
          <td>ram</td>
          <td>{{article.ram}}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{{article.weight}}</td>
        </tr>
        <tr>
          <td>Has Bluetooth</td>
          <td>{{article.bluethooth}}</td>
        </tr>
        <tr>
          <td>Has Webcam?</td>
          <td>{{article.webcam}}</td>
        </tr>
        <tr>
          <td>Battery</td>
          <td>{{article.battery}}</td>
        </tr>
        <tr>
          <td>Processor</td>
          <td>{{article.processor}}</td>
        </tr>
      </table> <hr> <br>
    </client-only><hr><br>
    </div>
  </div><hr>

  <!-- Posts -->
  <div class="w3-card w3-margin">
    <div class="w3-container w3-padding">
      <h4>Other {{article.company}} Laptops</h4>
    </div>

    <nuxt-link
      :to="'/laptops/' + article._id"
      v-for="article in related"
      :key="article._id"
      style="color: black;">
    <ul class="w3-ul w3-hoverable w3-white">
      <li class="w3-padding-16">

        <img :src="require('~/assets/' + article.imgpath)" class="w3-left w3-margin-right" style="width:50px">
        <span>
          <h4>{{ article.title }}</h4><br>
            </span>
      </li>
    </ul><hr>
  </nuxt-link>
  </div>
  <hr>

<!-- END Introduction Menu -->
</div>

<!-- END GRID -->
</div><br>

<!-- END w3-content -->
</div>
<div class="w3-light-grey">
  <div class="w3-content w3-margin-top" style="max-width:1400px;">

  <!-- The Grid -->
  <div class="w3-row-padding">

    <!-- Left Column -->
    <div class="w3-third">

      <div class="w3-white w3-text-grey w3-card-4">
        <div class="w3-display-container">
            <img :src="require('~/assets/' + article.imgpath)" style="width:100%"><br><br>
          <div class="w3-display-bottomleft w3-container w3-text-black">
            <h2>{{article.title}}</h2>
          </div>
        </div>
        <div class="w3-container"><hr>
          <p><button @click="linkcall" class="w3-button w3-block w3-teal">Buy Now</button></p>
          <hr>

          <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Rating</b></p>
          <p>Performance</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" v-bind:style="barWidthCalculated"> {{ article.performancepercentage }} </div>
          </div>
          <p>Battery Life</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" v-bind:style="barWidthCalculated1"> {{ article.batterypercentage }} </div>
          </div>
          <p>Display</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" v-bind:style="barWidthCalculated2"> {{ article.displaypercentage }} </div>
          </div>
          <p v-if="article.stylepercentage != null && article.stylepercentage.includes('%')">Style</p>
          <div v-if="article.stylepercentage != null && article.stylepercentage.includes('%')" class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" v-bind:style="barWidthCalculated3"> {{ article.stylepercentage }} </div>
          </div>
          <br>

            </div>
      </div><br>

    <!-- End Left Column -->
    </div>

    <!-- Right Column -->
    <div class="w3-twothird">

      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-laptop fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>{{ article.title }} Review</h2>

        <div class="w3-container">
          <h5 class="w3-opacity"><b>{{article.body}}</b></h5>
          <p>{{article.para2}}</p>
          <p>{{article.para3}}</p>
          <p>{{article.design}}</p>
          <hr>
        </div>
      </div>

      <div class="w3-container w3-card w3-white">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Specifications</h2>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>W3Schools.com</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
          <p>Web Development! All I need to know in one place</p>
          <hr>
        </div>
        <client-only>
        <table style="width:100%">
          <tr>
            <th>Buy Now</th>
            <th><button @click="linkcall" type="button" name="button">Buy Now</a></button></th>
          </tr>
          <tr>
            <td class="w3-text-teal">Note</td>
            <td>{{article.note}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">Company</td>
            <td>{{article.company}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">GPU</td>
            <td>{{article.gpu}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">price</td>
            <td>{{article.price}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">Best Works For</td>
            <td>{{article.reason}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">Operating System</td>
            <td>{{article.os}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">Size</td>
            <td>{{article.size}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">Is it two in one?</td>
            <td>{{article.twoinone}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">storage</td>
            <td v-if="article.storage >= '1000'">{{article.storage/1000}} TB</td>
            <td v-else>{{article.storage}} GB</td>
          </tr>
          <tr>
            <td class="w3-text-teal">Display</td>
            <td>{{article.display}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">ram</td>
            <td>{{article.ram}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">Weight</td>
            <td>{{article.weight}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">Has Bluetooth</td>
            <td>{{article.bluethooth}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">Has Webcam?</td>
            <td>{{article.webcam}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">Battery</td>
            <td>{{article.battery}}</td>
          </tr>
          <tr>
            <td class="w3-text-teal">Processor</td>
            <td>{{article.processor}}</td>
          </tr>
        </table>
      </client-only>
          </div>

    <!-- End Right Column -->
  </div><br>

  <!-- End Grid -->
</div>

  <!-- End Page Container -->
</div>

<footer class="w3-container w3-teal w3-center w3-margin-top">
  <p>Find me on social media.</p>
  <i class="fa fa-facebook-official w3-hover-opacity"></i>
  <i class="fa fa-instagram w3-hover-opacity"></i>
  <i class="fa fa-snapchat w3-hover-opacity"></i>
  <i class="fa fa-pinterest-p w3-hover-opacity"></i>
  <i class="fa fa-twitter w3-hover-opacity"></i>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
</footer>
</div>
</div>
</template>

<script>
import navbar from '~/components/navbar.vue'
export default {
  components: { navbar },
  async asyncData(context){
    const {data} = await context.$axios.get('/api/articles/' + context.route.params.id)
    return {
      article : data,
      related: [],
      width: '',
      width1: ''
    }
  },
  head () {
    return {
      title: this.article.title + ' review',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.article.description }
      ],
      link: [
 {rel: 'canonical', href: 'https://bestbudgetlaptop.net/laptops/' + this.article._id + '/' }
]
    }
  },
  methods:{
    deleteRecord(){
      if(confirm("Are you sure?") === true){
        this.$axios.delete('/api/articles/' + this.$route.params.id)
          .then((response) => {
            if(response.data._id){
              this.$router.push({ name:'laptops', params:{ deleted:'yes' } })
            }
          })
          .catch( (error) => {
            console.log(error);
          });
      }
    },
    linkcall(event){
      alert(this.article.amazonlink)
      window.open(this.article.amazonlink);
    },
    async method1() {
      await this.$axios.$post('/api/articles/related', {
        company: this.article.company,
        _id: this.article._id
      })
      .then((response) => {
       this.related = response
     })
    }
  },
  mounted:function(){
      this.method1() //method1 will execute at pageload
  },
  computed: {
    barWidthCalculated: function(){
      return {
        width: this.article.performancepercentage
      };
    },
    barWidthCalculated1: function(){
      return {
        width: this.article.batterypercentage
      };
    },
    barWidthCalculated2: function(){
      return {
        width: this.article.displaypercentage
      };
    },
    barWidthCalculated3: function(){
      return {
        width: this.article.stylepercentage
      };
    }
}
}
</script>
<style media="screen" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 70%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: ;
}
.ex2 {
  height: 500px;
    overflow: auto;
}
</style>
