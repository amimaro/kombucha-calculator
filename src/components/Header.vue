<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <h1 class="title">
            <a
              href="https://github.com/amimaro/kombucha-calculator"
              target="_blank"
            >Kombucha Calculator</a>
          </h1>
          <h2 class="is-size-5 has-text-weight-light">
            {{$t('basedOn')}}
            <a
              href="https://www.reddit.com/r/Kombucha/comments/9udpx6/faq_and_master_recipe_check_here_first/"
              target="_blank"
            >{{$t('kombuchaRecipe')}}</a>
          </h2>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'KombuchaHeader'
}
</script>
