<template lang='pug'>
  .container
    logo
    h1.title nuxt-starter
    .links
      a(href='https://nuxtjs.org/' target='_blank' rel='noopener noreferrer') Documentation
      a(href='https://github.com/nuxt/nuxt.js' target='_blank' rel='noopener noreferrer') GitHub
</template>

<script>
export default {
  name: 'Landing',
  async asyncData ({ params, $axios }) {
    try {
      let user = await $axios.$get('/users/user');
      return {
        user
      }
    } catch (error) {
      console.log(error)
    }
    
  }
}
</script>

<style lang='scss'>
  .container {
    @include flex(center, center, center, wrap);
    height: 100vh;
  }
  .title {
    width: 100%;
    text-align: center;
  }
  .links {
    width: 100%;
    text-align: center;
    @include flex(center, center, center, nowrap);
    a {
      background: #f2f2f2;
      border-radius: 3px;
      padding: 10px 20px;
      margin: 0 10px;
    }
  }
</style>
