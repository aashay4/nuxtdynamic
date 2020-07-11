<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h1>Laptops</h1>
      <nuxt-link to="/add/" v-if="$auth.loggedIn" class="btn btn-success">Add New</nuxt-link>
    </div>
    <hr>

    <div class="alert alert-success"
      v-if="$route.params.created=='yes'">Record added successfully</div>
    <div class="alert alert-success"
      v-if="$route.params.deleted=='yes'">Record deleted successfully</div>
        <div class="list-group"
      v-if="articles.length">
      <nuxt-link
        class="list-group-item list-group-item-action"
        :to="'/laptops/' + article._id"
        v-for="article in articles"
        :key="article._id">
        <h4>{{ article.title }}</h4><br>
        <h5>{{ article.author}}</h5>
        <h5>{{ article.body }}</h5>
      </nuxt-link>
    </div>

    <div class="alert alert-info"
      v-else>
      No records found.
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context){
    const {data} = await context.$axios.get('/api/articles')
    return {
      articles : data
    }
  },
}
</script>
