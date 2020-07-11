<template>
  <div class="w3-light-grey">

<!-- w3-content defines a container for fixed size centered content,
and is wrapped around the whole page content, except for the footer in this example -->
<div class="w3-content" style="max-width:1600px">

  <!-- Header -->
  <header class="w3-container w3-center w3-padding-48 w3-black">
    <h1 class="w3-xxxlarge"><b>Best Budget Laptops</b></h1>
    <h6>We help you to <span class="w3-tag w3-red">Find the Best Budget Laptops</span></h6>
  </header>
  <!-- Navbar -->
  <navbar-app />

<!-- Navbar --><br>
  <!-- Image header -->
  <div class="">
  <div class="w3-col l9 s12">

    <!-- Blog entry -->
    <div class="w3-container w3-white  w3-justify w3-padding-large">
      <div class="w3-container w3-white  w3-padding-large">
        <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:100%"></div>

        <div style="width:100%;" class="w3-justify">
          <h3>TITLE HEADING</h3>
          <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
          <p class="w3-hide-small"><strong>More Hats!test</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
            magna enim, ac accumsan tortor cursus at.</p><br>

        <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
        <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
        <p class="w3-clear"></p></div></div>
      </div>
      </div>
  <!-- About/Information menu -->
  <div class="w3-col l3">


    <!-- Advertising -->
    <div class="w3-white">
      <div class="w3-container w3-black">
        <h4>Advertise</h4>
      </div>
      <div class="w3-container w3-white">
        <div class="w3-container w3-display-container w3-light-grey w3-section" style="height:200px">
          <span class="w3-display-middle">AD</span>
        </div>
      </div>
    </div>
    <div class="w3-white">
      <div class="w3-container w3-black">
        <h4>Advertise</h4>
      </div>
      <div class="w3-container w3-white">
        <div class="w3-container w3-display-container w3-light-grey w3-section" style="height:200px">
          <span class="w3-display-middle">AD</span>
        </div>
      </div>
    </div>
    <div class="w3-white">
      <div class="w3-container w3-black">
        <h4>Advertise</h4>
      </div>
      <div class="w3-container w3-white">
        <div class="w3-container w3-display-container w3-light-grey w3-section" style="height:200px">
          <span class="w3-display-middle">AD</span>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- About/Information menu -->
  <!-- Grid -->
  <div class="w3-padding w3-row-padding">
    <div class="w3-container w3-padding-32" id="projects">
      <div class="borderleft" style="background-color: white;">
      <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16 w3-padding-left w3-card w3-center">Best Budget Laptops Collection</h3></div>
  </div>

  <div class="w3-row-padding">
    <div class="w3-row-padding">
       <div class="w3-quarter w3-container -bottom">
         <router-link to="/laptops-under-200-dollars/">
           <div class="w3-display-container">
           <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
           <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
             <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
             <div class="w3-container w3-white">
           <a><p><b><h3>Best Budget Laptops Under 200 Dollars</h3></b></p></a>
         </div>
         </router-link>
       </div>
       <div class="w3-quarter w3-container -bottom">
         <router-link to="/laptops-under-500-dollars/">
           <div class="w3-display-container">
           <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
           <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
             <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
             <div class="w3-container w3-white">
           <a><p><b><h3>Best Budget Laptops Under 500 Dollars</h3></b></p></a>
         </div>
         </router-link>
       </div>
       <div class="w3-quarter w3-container -bottom">
         <router-link to="/laptops-under-100-dollars/">
           <div class="w3-display-container">
           <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
           <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
             <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
             <div class="w3-container w3-white">
           <a><p><b><h3>Best Budget Laptops Under 100 Dollars</h3></b></p></a>
         </div>
         </router-link>
       </div>
       <div class="w3-quarter w3-container -bottom">
         <router-link to="/laptops-under-300-dollars/">
           <div class="w3-display-container">
           <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
           <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
             <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
             <div class="w3-container w3-white">
           <a><p><b><h3>10 Best Laptops Under 300 Dollars</h3></b></p></a>
         </div>
         </router-link>
       </div>
     </div>
  </div>

  <div class="">
    <div class="w3-container w3-padding-32" id="projects">
      <div class="borderleft" style="background-color: white;">
      <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16 w3-padding-left w3-card w3-center">Best Gaming Laptops</h3></div>
  </div>
  <div class="">
    <div class="w3-quarter w3-container -bottom">
      <router-link to="/gaming-laptops-under-500/">
        <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
        <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
          <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
          <div class="w3-container w3-white">
        <a><p><b><h3>Best Gaming Laptops Under 1500 Dollars</h3></b></p></a>
      </div>
      </router-link>
    </div>
    <div class="w3-quarter w3-container -bottom">
      <router-link to="/gaming-laptops-under-500/">
        <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
        <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
          <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
          <div class="w3-container w3-white">
        <a><p><b><h3>Best Gaming Laptops Under 1000 Dollars</h3></b></p></a>
      </div>
      </router-link>
    </div>
    <div class="w3-quarter w3-container -bottom">
      <router-link to="/gaming-laptops-under-500/">
        <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
        <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
          <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
          <div class="w3-container w3-white">
        <a><p><b><h3>Best Gaming Laptops Under 800 Dollars</h3></b></p></a>
      </div>
      </router-link>
    </div>
    <div class="w3-quarter w3-container -bottom">
      <router-link to="/gaming-laptops-under-500/">
        <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
        <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
          <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
          <div class="w3-container w3-white">
        <a><p><b><h3>Best Gaming Laptops Under 500 Dollars</h3></b></p></a>
      </div>
      </router-link>
    </div>
   </div>
  </div>

  <div class="w3-row-padding">
    <div class="w3-container w3-padding-32" id="projects">
    <div class="borderleft" style="background-color: white">
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16 w3-card w3-center">Best Business Laptops</h3></div>
  </div>
  </div>
  <div class="w3-row-padding">
    <div class="w3-quarter w3-container -bottom">
      <router-link to="/gaming-laptops-under-500/">
        <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
        <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
          <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
          <div class="w3-container w3-white">
        <a><p><b><h3>Best Laptops Under 1000 Dollars</h3></b></p></a>
      </div>
      </router-link>
    </div>
    <div class="w3-quarter w3-container -bottom">
      <router-link to="/gaming-laptops-under-500/">
        <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
        <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
          <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
          <div class="w3-container w3-white">
        <a><p><b><h3>Best Laptops Under 600 Dollars</h3></b></p></a>
      </div>
      </router-link>
    </div>
    <div class="w3-quarter w3-container -bottom">
      <router-link to="/gaming-laptops-under-500/">
        <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
        <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
          <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
          <div class="w3-container w3-white">
        <a><p><b><h3>Best Laptops Under 800 Dollars</h3></b></p></a>
      </div>
      </router-link>
    </div>
    <div class="w3-quarter w3-container -bottom">
      <router-link to="/gaming-laptops-under-500/">
        <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
        <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
          <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
          <div class="w3-container w3-white">
        <a><p><b><h3>Best Laptops Under 500 Dollars</h3></b></p></a>
      </div>
      </router-link>
    </div>
   </div>
    <!-- Blog entries -->
    <div class="w3-col l8 s12 w3-margin-top">

      <!-- Blog entry -->
      <div class="w3-container w3-white w3-padding-large w3-border-bottom">
        <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

        <div style="width:63%; float:right" class="w3-justify">
          <h3>Best Laptops for Photography</h3>
          <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
          <p class="w3-hide-small">Are you a photograper and need laptops for photography? We have separated few laptops which best for photography purposes. We strongly recommend these laptops which are best performing if you want correct colors and finalize the taken shots. Visit the link and explore more about photography laptops.</p><br>

        <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
        <p class="w3-right"><button class="w3-button w3-black" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
        <p class="w3-clear"></p></div></div>
        <div class="w3-container w3-white  w3-padding-large w3-border-bottom">
          <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

          <div style="width:63%; float:right" class="w3-justify">
            <h3>Best Gaming Laptops Under 1500 Dollars</h3>
            <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
            <p class="w3-hide-small">Gaming becomes more exciting when you are using a machine that is built specifically for gaming. True? Here, we have shared the best laptops for the gaming enthusiast. If you are looking for the best gaming performer then choosing one of the folowing is the right choice. Travel through the article and know more about it.</p><br>
          <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
          <p class="w3-right"><button class="w3-button w3-black" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
          <p class="w3-clear"></p></div></div>
          <div class="w3-container w3-white  w3-padding-large w3-border-bottom">
            <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

            <div style="width:63%; float:right" class="w3-justify">
              <h3>Best Gaming Laptops Under 800 Dollars</h3>
              <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
              <p style="w3-hide-small">Are you a gaming enthusiast and love to play games on your system? If yes, then we have a huge collection of laptops specifically built for the gamers. Travle through this article and get to know about the best budget gaming laptops under your budget. Happy gaming.</p><br>

            <p class="w3-left"><button class="w3-button w3-white w3-border" ><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
            <p class="w3-right"><button class="w3-button w3-black" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
            <p class="w3-clear"></p></div></div>

              <div class="w3-container w3-white  w3-padding-large w3-border-bottom">
                <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

                <div style="width:63%; float:right" class="w3-justify">
                  <h3>Best Laptops for Architecture & Designing Work</h3>
                  <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
                  <p></p><br>

                <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
                <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
                <p class="w3-clear"></p></div></div>
                <div class="w3-container w3-white w3-border-bottom w3-padding-large">
                  <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

                  <div style="width:63%; float:right" class="w3-justify">
                    <h3>Best Laptops for Writing</h3>
                    <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
                    <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
                      magna enim, ac accumsan tortor cursus at.</p><br>

                  <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
                  <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
                  <p class="w3-clear"></p></div></div>
                  <div class="w3-container w3-white w3-border-bottom w3-padding-large">
                    <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

                    <div style="width:63%; float:right" class="w3-justify">
                      <h3>Best Laptops for Businessman</h3>
                      <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
                      <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
                        magna enim, ac accumsan tortor cursus at.</p><br>

                    <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
                    <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
                    <p class="w3-clear"></p></div></div>

      <!-- Blog entry -->
      <div class="w3-container w3-white w3-border-bottom w3-padding-large">
        <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

        <div style="width:63%; float:right" class="w3-justify">
          <h3>Best Laptops for Programming</h3>
          <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
          <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
            magna enim, ac accumsan tortor cursus at.</p><br>

        <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
        <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
        <p class="w3-clear"></p></div></div>

      <!-- Blog entry -->
      <div class="w3-container w3-white w3-border-bottom w3-padding-large">
        <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

        <div style="width:63%; float:right" class="w3-justify">
          <h3>Best Budget Laptops Under 500 Dollar</h3>
          <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
          <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
            magna enim, ac accumsan tortor cursus at.</p><br>

        <p class="w3-left"><button class="w3-button w3-white w3-border"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
        <p class="w3-right"><button class="w3-button w3-black" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
        <p class="w3-clear"></p></div></div>

    <!-- END BLOG ENTRIES -->
    </div>

    <!-- About/Information menu -->
    <div class="w3-col l4 w3-margin-top">
      <!-- About Card -->
      <about-section />
      <hr>

      <!-- Posts -->
      <div class="w3-white ">
        <div class="w3-container w3-padding w3-black">
          <h4>Popular Posts</h4>
        </div>
        <ul class="w3-ul w3-hoverable w3-white">
          <li class="w3-padding-16">
            <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="Image" class="w3-left -right" style="width:50px">
            <span class="w3-large">Denim</span>
            <br>
            <span>Sed mattis nunc</span>
          </li>
          <li class="w3-padding-16">
            <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Image" class="w3-left -right" style="width:50px">
            <span class="w3-large">Sweaters</span>
            <br>
            <span>Praes tinci sed</span>
          </li>
          <li class="w3-padding-16">
            <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Image" class="w3-left -right" style="width:50px">
            <span class="w3-large">Workshop</span>
            <br>
            <span>Ultricies congue</span>
          </li>
          <li class="w3-padding-16">
            <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="Image" class="w3-left -right w3-sepia" style="width:50px">
            <span class="w3-large">Trends</span>
            <br>
            <span>Lorem ipsum dipsum</span>
          </li>
        </ul>
      </div>
      <hr>

      <!-- Advertising -->
      <div class="w3-white ">
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

      <!-- Tags -->
      <div class="w3-white ">
        <div class="w3-container w3-padding w3-black">
          <h4>Compare Laptops</h4>
        </div>
        <div class="w3-container w3-white"><br>
          <p>Confused, Which laptop to choose? Nevigate to our <router-link style="color:red;" to="/compare-laptops/">compare laptops</router-link> page and enter the specification of laptops and compare different laptops of various brands.</p>
        </div>
      </div>
      <hr>

      <!-- Laptop finder -->
      <div class="w3-white ">
        <div class="w3-container w3-padding w3-black">
          <h4>Laptop Finder</h4>
        </div>
        <div class="w3-container w3-white"><br>
          <p><router-link style="color:red;" to="/laptop-finder/">Laptop finder</router-link> is an advanced feature of our website. Enter your needs and reason, our algorithm will help you find the best laptop as per your needs and requirement.</p>
        </div>
      </div>
      <hr>

      <div class="w3-white ">
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
      <div class="w3-white ">
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
<br>
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
      <button type="button" class="w3-button w3-block w3-padding-large w3-red -bottom" onclick="document.getElementById('subscribe').style.display='none'">Subscribe</button>
    </div>
  </div>
</div>

<!-- Footer -->

<footer-app />
  </div>

</template>
<script>
import footer from '../components/footer.vue'
import aboutsection from '../components/aboutsection.vue'
import navbar from '../components/navbar.vue'

export default {
  name: 'Home',
  components: { 'footer-app': footer, 'about-section': aboutsection, 'navbar-app': navbar },
  data () {
    return {
          notes: [],
        step: 1,
        totalsteps: 5,
        size: '',
        purpose: '',
        price: '',
        os: '',
        twoinone: '',
        isclose: false
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
        sendquery()
        {
        },
        deleteNote(id){
          let notes = this.notes.filter(note => note._id != id)
          this.notes = notes;
        },
        updateNote(note){
          this.deleteNote(note._id);
          this.createNote(note);
        },
        createNote(note){
            this.notes = [note, ...this.notes];
        },
    },

      }
</script>
<style>
h1,h2,h3,h4,h5 {font-family: "Oswald"}
body {font-family: "Open Sans"}
.nav-link.router-link-exact-active {
  border-bottom: 3px solid #06c4d1;
}
.borderleft {
  border-left: 3px solid red;
}
body {font-family: "Open Sans"}
</style>
