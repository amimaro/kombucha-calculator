<template>
  <div class="home">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <Header />
          <Form />
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

export default {
  name: 'home',
  components: {
    Form,
    Header,
    Footer
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
