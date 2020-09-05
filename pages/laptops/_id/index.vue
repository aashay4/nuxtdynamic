<template lang="html">
  <client-only>
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
      <h5><a :href="article.amazonlink">Buy Now</a> <span class="w3-opacity">April 7, 2014</span></h5>
    </div>

    <div class="w3-container">
      <p>{{article.body}}</p>
      <div class="w3-row">
        <div class="w3-col m8 s12">
          <p><button @click="linkcall" class="w3-button w3-padding-large w3-white w3-border"><b>Buy Now &raquo;</b></button></p>
        </div>
        <div class="w3-col m4 w3-hide-small">
          <p><span class="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span class="w3-tag">0</span></span></p>
        </div>
        <div class="">
          <p>Para 1:{{article.para2}}</p>
          <p>Para 2: {{article.para3}}</p>
          <p>Design: {{article.design}}</p>
          <p>Descritpio: {{article.description}}</p>
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
  <img src="~/assets/laptop.jpg" style="width:100%">
    <div class="w3-container w3-white" style="width:100%">
      <h4><b>{{article.title}} Configuration</b></h4>
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
          <td>Company</td>
          <td>{{article.company}}</td>
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
          <td>{{article.storage}}</td>
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
          <td>Expandable Memory</td>
          <td>{{article.expandablememory}}</td>
        </tr>
        <tr>
          <td>O.S Type</td>
          <td>{{article.ostype}}</td>
        </tr>
        <tr>
          <td>Keyboard</td>
          <td>{{article.keyboard}}</td>
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
          <td>This is fucking shit{{article.processor}}</td>
        </tr>
      </table>
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

        <img src="~/assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
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

  </div>
</client-only>
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
    }
  },
  head () {
    return {
      title: this.article.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.article.desccription }
      ],
      link: [
 {rel: 'canonical', href: 'https://bestbudgetlaptops.net/laptops/' + this.article._id + '/' }
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
