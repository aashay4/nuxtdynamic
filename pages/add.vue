<template lang="html">
  <div class="">
    <nuxt-link to="/logout" class="nav-link" exact-active-class="active">Logout</nuxt-link>
    <h1>My Account</h1>

    <hr>

    <div class="card">
      <div class="card-body">
        <h4>{{ this.$auth.user.full_name }}</h4>
        <div class="mb-5"><strong>Email:</strong> {{ this.$auth.user.email }}</div>
        <nuxt-link to="/logout" class="btn w3-blue">Logout</nuxt-link>
      </div>
    </div>
    <h1>Add New Laptop</h1>
    <hr>
    <p id="slug">http://bestbudgetlaptops.com/laptops<span>{{ slug }}</span></p>
    <div class="row" style="margin-left: 20px">
      <div class="col-md-6">
        <form action=""
          method="post"
          @submit.prevent="submitForm()">

          <div class="form-group">
            <label for="">Title</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.title }"
              v-model="title">
          </div>
          {{ id }}
          <div class="form-group">
            <label for="">Company</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.company }"
              v-model="company">
            <div class="invalid-feedback" v-if="errors && errors.company">
              {{ errors.company.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Img path</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.imgpath }"
              v-model="imgpath">
            <div class="invalid-feedback" v-if="errors && errors.body">
              {{ errors.body.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Note - Any other information</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.note }"
              v-model="note">
            <div class="invalid-feedback" v-if="errors && errors.note">
              {{ errors.note.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Price</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.price }"
              v-model="price">
            <div class="invalid-feedback" v-if="errors && errors.price">
              {{ errors.price.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">reason business/student/gaming/etc...</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.reason }"
              v-model="reason">
              <input type="checkbox" id="General-purpose" value="General-purpose" v-model="reason">
  <label for="General-purpose">General-purpose</label>
  <input type="checkbox" id="All-purpose" value="All-purpose" v-model="reason">
  <label for="All-purpose">All-purpose</label>
  <input type="checkbox" id="Gaming" value="Gaming" v-model="reason">
  <label for="Gaming">Gaming</label>
  <input type="checkbox" id="Programming" value="Programming" v-model="reason">
  <label for="Programming">Programming</label>
  <input type="checkbox" id="Business" value="Business" v-model="reason">
  <label for="Business">Business</label>
  <input type="checkbox" id="Students" value="Students" v-model="reason">
  <label for="Students">Students</label>
  <input type="checkbox" id="Writing" value="Writing" v-model="reason">
  <label for="Writing">Writing</label>
  <input type="checkbox" id="Music production" value="Music production" v-model="reason">
  <label for="Music production">Music production</label>
  <input type="checkbox" id="Kids" value="Kids" v-model="reason">
  <label for="Kids">Kids</label>
  <input type="checkbox" id="Photo editing" value="Photo editing" v-model="reason">
  <label for="Photo editing">Photo editing</label>
  <input type="checkbox" id="High school" value="High school" v-model="reason">
  <label for="High school">High school</label>
  <input type="checkbox" id="Video editing" value="Video editing" v-model="reason">
  <label for="Video editing">Video editing</label>
  <br>
        </div>

          <div class="form-group">
            <label for="">os</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.os }"
              v-model="os">
            <div class="invalid-feedback" v-if="errors && errors.os">
              {{ errors.reason.os }}
            </div>
          </div>

          <div class="form-group">
            <label for="">laptop size</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.size }"
              v-model="size">
            <div class="invalid-feedback" v-if="errors && errors.size">
              {{ errors.reason.size }}
            </div>
          </div>

          <div class="form-group">
            <label for="">twoinone - Yes/no</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.twoinone }"
              v-model="twoinone">
            <div class="invalid-feedback" v-if="errors && errors.twoinone">
              {{ errors.reason.twoinone }}
            </div>
          </div>

          <div class="form-group">
            <label for="">GPU</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.gpu }"
              v-model="gpu">
            <div class="invalid-feedback" v-if="errors && errors.gpu">
              {{ errors.gpu }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Storage capacity</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.twoinone }"
              v-model="storage">
            <div class="invalid-feedback" v-if="errors && errors.twoinone">
              {{ errors.reason.twoinone }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Display</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.twoinone }"
              v-model="display">
            <div class="invalid-feedback" v-if="errors && errors.twoinone">
              {{ errors.reason.twoinone }}
            </div>
          </div>

          <div class="form-group">
            <label for="">RAM</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.twoinone }"
              v-model="ram">
            <div class="invalid-feedback" v-if="errors && errors.twoinone">
              {{ errors.reason.twoinone }}
            </div>
          </div>

          <div class="form-group">
            <label for="">weight</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.twoinone }"
              v-model="weight">
            <div class="invalid-feedback" v-if="errors && errors.twoinone">
              {{ errors.reason.ostype }}
            </div>
          </div>

          <div class="form-group">
            <label for="">bluethooth - Yes/No</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.twoinone }"
              v-model="bluethooth">
            <div class="invalid-feedback" v-if="errors && errors.twoinone">
              {{ errors.reason.ostype }}
            </div>
          </div>

          <div class="form-group">
            <label for="">webcam - Yes/No</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.twoinone }"
              v-model="webcam">
            <div class="invalid-feedback" v-if="errors && errors.twoinone">
              {{ errors.reason.ostype }}
            </div>
          </div>

          <div class="form-group">
            <label for="">battery</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.twoinone }"
              v-model="battery">
            <div class="invalid-feedback" v-if="errors && errors.twoinone">
              {{ errors.reason.ostype }}
            </div>
          </div>

          <div class="form-group">
            <label for="">processor</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.twoinone }"
              v-model="processor">
            <div class="invalid-feedback" v-if="errors && errors.twoinone">
              {{ errors.reason.ostype }}
            </div>
          </div>

          <div class="form-group">
            <label for="">amazonlink</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.twoinone }"
              v-model="amazonlink">
            <div class="invalid-feedback" v-if="errors && errors.twoinone">
              {{ errors.reason.ostype }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Review/ model review</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.body }"
              v-model="body"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.body">
              {{ errors.body.msg }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Design</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.body }"
              v-model="design"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.body">
              {{ errors.body.msg }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Para 2</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.body }"
              v-model="para2"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.body">
              {{ errors.body.msg }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Para 3</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.body }"
              v-model="para3"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.body">
              {{ errors.body.msg }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Meta description</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.body }"
              v-model="description"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.body">
              {{ errors.body.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Performance percentage</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.body }"
              v-model="performancepercentage"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.body">
              {{ errors.body.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Battery Percentage</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.body }"
              v-model="batterypercentage"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.body">
              {{ errors.body.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Display Percentage</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.body }"
              v-model="displaypercentage"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.body">
              {{ errors.body.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Style Percentage</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.body }"
              v-model="stylepercentage"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.body">
              {{ errors.body.msg }}
            </div>
          </div>

          <input type="submit" value="Submit" class="btn btn-primary mr-3">
          <nuxt-link to="/" class="btn btn-secondary mr-3">Cancel</nuxt-link>

        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  head () {
    return {
      meta: [

      ]
    }
  },
    middleware: 'auth',
    data(){
        return{
          note: null,
          errors:null,
          title:'',
          company:null,
          body:null,
          imgpath:null,
          price:null,
          reason:[],
          os:null,
          size:null,
          twoinone:null,
          storage:null,
          gpu: null,
          display:null,
          ram:null,
          weight:null,
          bluethooth:null,
          webcam:null,
          processor:null,
          battery:null,
          amazonlink:null,
          id: null,
          design: null,
          para2: null,
          para3: null,
          description: null,
          performancepercentage: null,
          batterypercentage: null,
          displaypercentage: null,
          stylepercentage: null
        }
      },
      computed: {
    slug: function() {
      var slug = this.sanitizeTitle(this.title);
      return slug;
    }
  },
      methods:{
        sanitizeTitle: function(title) {
      var slug = "";
      // Change to lower case
      var titleLower = title.toLowerCase();
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
      // Letter "d"
      slug = slug.replace(/đ/gi, 'd');
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, '');
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, '-');
      this.id = slug;
      return slug;
    },
        submitForm(){
          alert(this.imgpath)
          this.$axios.post( '/api/articles', {
              title: this.title,
              company: this.company,
              body: this.body,
              imgpath: this.imgpath,
              price: this.price,
              reason: this.reason,
              os: this.os,
              size: this.size,
              twoinone: this.twoinone,
              storage: this.storage,
              gpu: this.gpu,
              display: this.display,
              ram: this.ram,
              weight: this.weight,
              bluethooth: this.bluethooth,
              webcam: this.webcam,
              battery: this.battery,
              processor: this.processor,
              amazonlink: this.amazonlink,
              _id: this.id,
              design: this.design,
              para2: this.para2,
              para3: this.para3,
              description: this.description,
              note: this.note,
              performancepercentage: this.performancepercentage,
              batterypercentage: this.batterypercentage,
              displaypercentage: this.displaypercentage,
              stylepercentage: this.stylepercentage
            })
            .then((response) => {
              if(response.data._id){
                this.$router.push({ name:'laptops', to: '/laptops', params:{ created:'yes' } })
              }
            })
            .catch( (error) => {
              console.log(error)
              if(error.response.data.errors){
                this.errors = error.response.data.errors
              }
            });
        }
      }
    }
</script>

<style lang="css">
</style>
