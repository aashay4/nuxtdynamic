<template>
  <div>
    <h1>Logging out</h1>
    <hr>

    <p>Please wait...</p>
  </div>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex,nofollow' }
      ]
    }
  },
  middleware: 'auth',
  async asyncData(context){
    await context.$auth.logout()
  },
}
</script>
