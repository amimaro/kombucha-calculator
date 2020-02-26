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
import Header from '@/components/Header'
import Form from '@/components/Form'
import Recipe from '@/components/Recipe'
import Footer from '@/components/Footer'

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
