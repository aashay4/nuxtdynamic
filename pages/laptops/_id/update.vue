<template>
  <div>
    <h1>Update Article</h1>
    <hr>

    <div class="row">
      <div class="col-md-6">
        <form action=""
          method="post"
          @submit.prevent="submitForm()">
          <div class="form-group">
            <label for="">Note</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.note }"
              v-model="note">
            <div class="invalid-feedback" v-if="errors && errors.note">
              {{ errors.note.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">Title</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.title }"
              v-model="title">
            <div class="invalid-feedback" v-if="errors && errors.title">
              {{ errors.title.msg }}
            </div>
          </div>

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
            <label for="">Body</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.body }"
              v-model="body"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.body">
              {{ errors.body.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">imgpath</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.imgpath }"
              v-model="imgpath"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.imgpath">
              {{ errors.imgpath.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">price</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.price }"
              v-model="price"></textarea>
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
  <input type="checkbox" id="College students" value="College students" v-model="reason">
  <label for="College students">College students</label>
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
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.os }"
              v-model="os"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.os">
              {{ errors.os.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">size</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.size }"
              v-model="size"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.size">
              {{ errors.size.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">twoinone</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.twoinone }"
              v-model="twoinone"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.twoinone">
              {{ errors.twoinone.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">GPU</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.gpu }"
              v-model="gpu"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.gpu">
              {{ errors.gpu.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">storage</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.storage }"
              v-model="storage"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.storage">
              {{ errors.storage.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">display</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.display }"
              v-model="display"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.display">
              {{ errors.display.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">ram</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.ram }"
              v-model="ram"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.ram">
              {{ errors.ram.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">weight</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.weight }"
              v-model="weight"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.weight">
              {{ errors.weight.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">bluethooth</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.bluethooth }"
              v-model="bluethooth"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.bluethooth">
              {{ errors.bluethooth.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">webcam</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.webcam }"
              v-model="webcam"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.webcam">
              {{ errors.webcam.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">battery</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.battery }"
              v-model="battery"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.battery">
              {{ errors.battery.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">processor</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.processor }"
              v-model="processor"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.processor">
              {{ errors.processor.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">amazonlink</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.amazonlink }"
              v-model="amazonlink"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.amazonlink">
              {{ errors.amazonlink.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">design</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.design }"
              v-model="design"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.design">
              {{ errors.design.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">para2</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.para2 }"
              v-model="para2"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.para2">
              {{ errors.para2.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">para3</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.para3 }"
              v-model="para3"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.para3">
              {{ errors.para3.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">description</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.description }"
              v-model="description"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.description">
              {{ errors.description.msg }}
            </div>
          </div>

          <input type="submit" value="Submit" class="btn btn-primary mr-3">
          <nuxt-link :to="'/laptops/' + $route.params.id" class="btn btn-secondary mr-3">Cancel</nuxt-link>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData(context){
    const {data} = await context.$axios.get('/api/articles/' + context.route.params.id)
    return {
      article : data
    }
  },
  data(){
    return{
      errors:null,
      title:null,
      company:null,
      body:null,
      imgpath:null,
      price:null,
      reason:[],
      os:null,
      size:null,
      twoinone:null,
      storage:null,
      display:null,
      ram:null,
      weight:null,
      bluethooth:null,
      webcam:null,
      battery:null,
      processor:null,
      amazonlink:null,
      design: null,
      para2: null,
      para3: null,
      description: null,
      gpu: null,
      note: null
    }
  },
  mounted(){
    this.fillFormData()
  },
  methods:{
    fillFormData(){
      this.title = this.article.title
      this.company = this.article.company
      this.body = this.article.body
      this.imgpath = this.article.imgpath
      this.price = this.article.price
      this.reason = this.article.reason
      this.os = this.article.os
      this.size = this.article.size
      this.twoinone = this.article.twoinone
      this.storage = this.article.storage
      this.gpu = this.article.gpu
      this.display = this.article.display
      this.ram = this.article.ram
      this.weight = this.article.weight
      this.bluethooth = this.article.bluethooth
      this.webcam = this.article.webcam
      this.battery = this.article.battery
      this.processor = this.article.processor
      this.amazonlink = this.article.amazonlink
      this.design = this.article.design
      this.para2 = this.article.para2
      this.para3 = this.article.para3
      this.description = this.article.description,
      this.note = this.article.note
    },
    submitForm(){
      this.$axios.put( '/api/articles/' + this.$route.params.id , {
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
          design: this.design,
          para2: this.para2,
          para3: this.para3,
          description: this.description,
          note: this.note
        })
        .then((response) => {
          console.log(response)
          if(response.data._id){
            this.$router.push({ name:'laptops', to:'/laptops', params:{ updated:'yes', id: this.$route.params.id } })
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
