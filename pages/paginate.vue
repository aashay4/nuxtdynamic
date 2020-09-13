<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h1>Laptops</h1>
      <nuxt-link to="/add" v-if="$auth.loggedIn" class="btn btn-success">Add New</nuxt-link>
    </div>
    <hr>
    <div class="alert alert-success"
      v-if="$route.params.created=='yes'">Record added successfully</div>
    <div class="alert alert-success"
      v-if="$route.params.deleted=='yes'">Record deleted successfully</div>
        <div class="list-group">
      <nuxt-link
        class="list-group-item list-group-item-action"
        :to="'/laptops/' + article._id"
        v-for="article in paginate"
        :key="article._id">
        <h4>{{ article.title }}</h4><br>
        <h5>{{ article.author}}</h5>
        <h5>{{ article.body }}</h5>
      </nuxt-link>
      <div v-for="pageNumber in totalPages" :key="pageNumber.id">
    <a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red" v-bind:key="pageNumber" @click="setPage(pageNumber)" :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
  </div>
    </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      articles : [],
      searchKey: '',
    currentPage: 1,
    itemsPerPage: 2,
    resultCount: 0
    }
  },
    methods: {
      async dosomething(){
      const data = await this.$axios.$get('/api/articles')
      this.articles = data
    },
    setPage: function(pageNumber) {
        this.currentPage = pageNumber
      },
  },
  computed: {
    /* eslint-disable */
        totalPages: function() {
          if (this.resultCount == 0){
            return 1
          }
          else {
          return Math.ceil(this.resultCount / this.itemsPerPage)
        }
        },
        /* eslint-disable */
        paginate: function() {
            if (!this.articles || this.articles.length != this.articles.length) {
                return
            }
            this.resultCount = this.articles.length
            if (this.currentPage >= this.totalPages) {
              this.currentPage = this.totalPages
            }
            var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
            return this.articles.slice(index, index + this.itemsPerPage)
        }
    },
  mounted() {
    this.dosomething()
}
}
</script>
<style media="screen" scoped>

.current {
color: red;
}

</style>
