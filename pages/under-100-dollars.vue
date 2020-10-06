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
          <h1>Best Laptops Under 100 Dollars</h1>
          <span class="w3-opacity">Jan 2, 2020</span><em class="w3-opacity"> by </em><strong>Adam Johnson</strong>
          <hr>
          <p>Yes, you read it right. Laptops under 100 dollars do exist. There are a few companies that manufacture laptops at such a cheap price. When there are plenty of choices, selecting a particular piece is difficult. For that reason, we are here to help you out with the best laptops under $100.
          </p>
          <p>All the companies try their best to manufacture a top-notch product that the users enjoy using. But the fact is, technology is changing every year and every month. This makes the old product cheaper as the demand for newer products rises. In this list of the best laptops under 100 dollars, you won't find laptops with advanced features or the latest operating system. All the laptops in this list are old but highly productive if you are going to perform just one task at a time or use one software at once.</p>
          <h3>Who Should Buy Laptops Under 100 Dollars?</h3>
          <p>As discussed above, the laptops in this list do not offer advanced functionality and some of the modern software might not just work on these laptops. If you are buying a laptop for limited use and you have no plans to use heavy software then buying laptops under 1000 dollars is good for you. These tasks include creating a doc file, manage an excel sheet, watch movies, read online articles & visit other websites then choosing cheap laptops under 100 is the best choice for you. But if you are expecting more from these laptops then you need to upgrade your budget.</p>
          <p>Few things you should remember before buying this laptop. First, on this list, you will see very few new laptops because 100 dollars is very less. For many laptops, you won't be able to run the latest software and in case you install the software, the laptop might heat up or hang. So, let's dive into the list of the best cheap laptops under 100 dollars without wasting any time.</p>
          <h2>Cheap Laptops Under 100 Dollars</h2><hr>
          <h3>Acer - Chromebook</h3>
          <h4>Chromebook</h4>
          <p>Chromebook laptops are considered as one of the most affordable laptops. Acer is also one of the most trusted brands. You can trust this brand even if you are buying a pre-owned laptop.</p><hr>
          <h3>Dell Latitude D630</h3>
          <h4>Windows 7</h4>
          <p>Amazing 14.1 inches display, Windows 7 already installed, less 3 pounds of weight makes this laptop best for children. While growing up, handing this kind of laptops to kids is more preferable.</p><hr>
          <h3>Apple MacBook MB402LL/A A1181</h3>
          <p>Released in 2008, it is a pre-owned laptop. With 2 GB of RAM, it makes it super easy to create docs and maintain sheets. The processor speed is 2.0 GHz which will work amazingly well unless you run big designing or programming software.</p>
          <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
          <p class="w3-right"><button class="w3-button w3-teal" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
          <p class="w3-clear"></p></div></div>
    </div>

    <!-- About/Information menu -->
    <div class="w3-col l4">
        <popularposts />

      <hr>

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
import footer from '~/components/footer.vue'
import popularposts from '../components/popularposts.vue'
export default {
components: { popularposts, navbar, 'footer-app': footer },
}
</script>

<style lang="css">
</style>
