<template>
  <div>
    <h1>Laptop Details</h1>

    <hr>
    <div class="d-flex justify-content-between">
      <div>
        <nuxt-link :to="'/laptops/' + article._id + '/update'" v-if="$auth.loggedIn" class="btn btn-primary mr-3">Update</nuxt-link>
        <button v-if="$auth.loggedIn" class="btn btn-danger" @click="deleteRecord()">Delete</button>
      </div>

      <nuxt-link to="/laptops" class="btn btn-secondary mr-3">Back to Laptops</nuxt-link>
    </div>
    <img :src="require('~/assets/' + article.imgpath)" style="height: 200px; width: 200px;">
    <div class="alert alert-success"
      v-if="$route.params.updated=='yes'">Record updated successfully</div><br>
      <a :href="article.amazonlink">Buy on Amazon</a>
    <h1>{{ article.title }}</h1>
    <p>Company{{ article.company }}</p>
    <p>Price:{{ article.price }}</p>
    <p>Purpose{{article.reason}}</p><br>
    <p>OS: {{article.os}}</p><br>
    <p>Size: {{article.size}}</p>
    <p>Is it two in one:{{article.twoinone}}</p>
    <p>Laptop Storage: {{article.storage}}</p>
    <p>Laptop Display: {{article.display}}</p>
    <p>Ram: {{article.ram}}</p>
    <p>expandablememory: {{article.expandablememory}}</p>
    <p>ostype {{article.ostype}}</p>
    <p>keyboard{{article.keyboard}}</p>
    <p>weight{{article.weight}}</p>
    <p>Has bluetooth{{article.bluethooth}}</p>
    <p>Has webcam{{article.webcam}}</p>
    <p>battery{{article.battery}}</p>
    <p>Processor{{article.processor}}</p>

    <h1>{{ article.title }} Review</h1>
      <p>{{ article.body }}</p><br>
    <button @click="linkcall" type="button" name="button">Buy on Amazon</a></button>
    <hr>
    <table>
  <tr>
    <th>Specifications</th>
    <th>Content</th>
    <th>Ad</th>
  </tr>
  <tr>
    <td>Company</td>
    <td>{{article.company}}</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>price</td>
    <td>{{article.price}}</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Best Works For</td>
    <td>{{article.reason}}</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Operating System</td>
    <td>{{article.os}}</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Size</td>
    <td>{{article.size}}</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Is it two in one?</td>
    <td>{{article.twoinone}}</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>storage</td>
    <td>{{article.storage}}</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>Display</td>
    <td>{{article.display}}</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>ram</td>
    <td>{{article.ram}}</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>Expandable Memory</td>
    <td>{{article.expandablememory}}</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>O.S Type</td>
    <td>{{article.ostype}}</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>Keyboard</td>
    <td>{{article.keyboard}}</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>Weight</td>
    <td>{{article.weight}}</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>Has Bluetooth</td>
    <td>{{article.bluethooth}}</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>Has Webcam?</td>
    <td>{{article.webcam}}</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>Battery</td>
    <td>{{article.battery}}</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>Processor</td>
    <td>This is fucking shit{{article.processor}}</td>
    <td>Italy</td>
  </tr>
</table>
  </div>
</template>

<script>
export default {
  async asyncData(context){
    const {data} = await context.$axios.get('/api/articles/' + context.route.params.id)
    return {
      article : data,
    }
  },
  head () {
    return {
      title: this.article.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.article.body }
      ],
      link: [
 {rel: 'canonical', href: this.article._id + '/' }
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
</style>
