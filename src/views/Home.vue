<template>
  <div class="home">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <Header />
          <Form />
          <Recipe />
          <Footer />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Recipe from '@/components/Recipe'

export default {
  name: 'home',
  components: {
    Header,
    Form,
    Recipe,
    Footer
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
