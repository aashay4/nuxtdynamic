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
            <label for="">reason</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.reason }"
              v-model="reason"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.reason">
              {{ errors.reason.msg }}
            </div>
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
            <label for="">expandablememory</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.expandablememory }"
              v-model="expandablememory"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.expandablememory">
              {{ errors.expandablememory.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">ostype</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.ostype }"
              v-model="ostype"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.ostype">
              {{ errors.ostype.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">keyboard</label>
            <textarea cols="30" rows="4" class="form-control"
              :class="{ 'is-invalid': errors && errors.keyboard }"
              v-model="keyboard"></textarea>
            <div class="invalid-feedback" v-if="errors && errors.keyboard">
              {{ errors.keyboard.msg }}
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
      reason:null,
      os:null,
      size:null,
      twoinone:null,
      storage:null,
      display:null,
      ram:null,
      expandablememory:null,
      ostype:null,
      keyboard:null,
      weight:null,
      bluethooth:null,
      webcam:null,
      battery:null,
      processor:null,
      amazonlink:null
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
      this.display = this.article.display
      this.ram = this.article.ram
      this.expandablememory = this.article.expandablememory
      this.ostype = this.article.ostype
      this.weight = this.article.weight
      this.bluethooth = this.article.bluethooth
      this.webcam = this.article.webcam
      this.battery = this.article.battery
      this.processor = this.article.processor
      this.amazonlink = this.article.amazonlink
      this.keyboard = this.article.keyboard
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
          display: this.display,
          ram: this.ram,
          expandablememory: this.expandablememory,
          ostype: this.ostype,
          keyboard: this.keyboard,
          weight: this.weight,
          bluethooth: this.bluethooth,
          webcam: this.webcam,
          battery: this.battery,
          processor: this.processor,
          amazonlink: this.amazonlink
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
