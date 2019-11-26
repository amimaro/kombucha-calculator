<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <h2 class="is-size-5 has-text-weight-light">{{$t('recipe')}}</h2>
          <div class="columns is-centered">
            <div class="column is-one-third">
              <table class="table is-narrow is-striped">
                <thead>
                  <tr>
                    <th>{{$t('ingredient')}}</th>
                    <th class="has-text-right">{{$t('quantity')}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{$t('water')}}</td>
                    <td class="has-text-right">1 L</td>
                  </tr>
                  <tr>
                    <td>{{$t('sugar')}}</td>
                    <td class="has-text-right">70 g</td>
                  </tr>
                  <tr>
                    <td>{{$t('tea')}}</td>
                    <td class="has-text-right">7 g</td>
                  </tr>
                  <tr>
                    <td>Starter</td>
                    <td class="has-text-right">100 mL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'KombuchaRecipe'
}
</script>
