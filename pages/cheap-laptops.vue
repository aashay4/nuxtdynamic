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
          <h1>Cheap Laptops</h1>
          <span class="w3-opacity">Jan 2, 2020</span><em class="w3-opacity"> by </em><strong>Adam Johnson</strong><em class="w3-opacity">  In </em><strong>Budget Laptops</strong>
          <hr>
          <p>In this competitive world, companies are more focusing on the improving a product quality and decreasing the price. So, today it is possible to find the best laptop under 200 dollars which offers almost all latest functionalities. With these laptops, you can do everyday tasks like creating docs, watching movies, surfing web but some tasks these laptop can't perform. So, let's dive into the list of the best laptops under 200 dollars without wasting any time.</p>
          <h1>Top Cheap Laptops Under 200 Dollars</h1><hr>
          <section>
            <h2><br>
              Select Cheap Laptop Price
            </h2>
            <input type="radio" id="10" value="100" v-model="price">
      <label for="10">Under 100</label>
      <input type="radio" id="12" value="200" v-model="price">
      <label for="12">Under 200</label>
      <input type="radio" id="14" value="300" v-model="price">
      <label for="14">Under 300</label>
      <input type="radio" id="16" value="400" v-model="price">
      <label for="16">Under 400</label>
      <input type="radio" id="all" value="500" v-model="price">
      <label for="all">Under 500</label>
      <input type="radio" id="all" value="1300" v-model="price">
      <label for="all">Under 1300</label>
      <button class="w3-margin-bottom w3-button w3-padding-large w3-white w3-border" @click.prevent="findit"><b>Send Query &raquo;</b></button>
          </section>
          <div class="w3-margin w3-white" id="found"><hr>
          <div v-for="article in articles"
            :key="article._id">
            <ul class="w3-ul w3-hoverable w3-white">
              <li class="w3-padding-16">
                <img v-if="article.title != null" :src="require('~/assets/' + article.imgpath)" alt="Image" class="w3-left w3-margin-right" style="width:50px">
                <nuxt-link style="color: black" :to="'/laptops/' + article._id"><span class="w3-large">{{ article.title }}</span></nuxt-link>
                <br>
                <span>Price:{{ article.price }}</span><br>
                <span><a :href="article.amazonlink">Buy Now</a></span>
              </li><hr>
            </ul>
          </div>
              </div>
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
          <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <nuxt-link style="color: black" to="/cheap-laptops-under-100-dollars"><span class="w3-large">Cheap Laptops Under 100 Dollars</span></nuxt-link>
          <br>
          <span>Sed mattis nunc</span>
        </li>
        <li class="w3-padding-16">
          <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Cheap Laptops Under 300 Dollars</span>
          <br>
          <span>Praes tinci sed</span>
        </li>
        <li class="w3-padding-16">
          <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Cheap Laptops Under 400 Dollars</span>
          <br>
          <span>Ultricies congue</span>
        </li>
        <li class="w3-padding-16">
          <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right w3-sepia" style="width:50px">
          <span class="w3-large">Cheap Laptops Under 500 Dollars</span>
          <br>
          <span>Lorem ipsum dipsum</span>
        </li>
      </ul>
    </div>
      <hr>

      <div class="w3-white w3-margin">
      <div class="w3-container w3-padding w3-black">
        <h4>Popular Posts</h4>
      </div>
      <ul class="w3-ul w3-hoverable w3-white">
        <li class="w3-padding-16">
          <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <nuxt-link style="color: black" to="/cheap-laptops-under-100-dollars"><span class="w3-large">Cheap Laptops Under 100 Dollars</span></nuxt-link>
          <br>
          <span>Sed mattis nunc</span>
        </li>
        <li class="w3-padding-16">
          <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Cheap Laptops Under 300 Dollars</span>
          <br>
          <span>Praes tinci sed</span>
        </li>
        <li class="w3-padding-16">
          <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Cheap Laptops Under 400 Dollars</span>
          <br>
          <span>Ultricies congue</span>
        </li>
        <li class="w3-padding-16">
          <img src="../assets/laptop.jpg" alt="Image" class="w3-left w3-margin-right w3-sepia" style="width:50px">
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
<footer class="w3-container w3-dark-grey" style="padding:32px">
  <a href="#" class="w3-button w3-black w3-padding-large w3-margin-bottom"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
</footer>

  </div>
</template>

<script>
export default {
components: {  },
data() {
  return {
    price: '1300',
    articles: []
  }
},
methods: {
  async findit(){
      alert(this.price + "dollars selected");
      await this.$axios.$post('/api/articles/cheap100', {
        price: this.price
      })
      .then((response) => {
        console.log(response)
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
