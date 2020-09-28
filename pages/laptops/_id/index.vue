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
          <div class="w3-container w3-card w3-white">
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Other {{ article.company }} Laptops</h2>
            <div class="w3-container" v-for="article in related">
              <div class="container w3-white w3-card"><br>
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

              </div>
    <!-- End Right Column -->
  </div><br>
  <!-- End Grid -->
</div>

  <!-- End Page Container -->
</div>

<footer-app />
</div>
</div>
</template>

<script>
import footer from '~/components/footer.vue'
import navbar from '~/components/navbar.vue'
export default {
  components: { navbar, 'footer-app': footer },
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
    //    var arrayslice = [];
      //  arrayslice = response;
        //const myarray = arrayslice.slice(-2);
        //console.log(myarray);
       this.related = response.slice(-2);
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
