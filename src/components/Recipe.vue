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
                    <td>
                      <input
                        class="input has-text-right is-small"
                        type="tel"
                        v-model.lazy="water"
                        v-money="liters"
                        :placeholder="$t('water')"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{{$t('sugar')}}</td>
                    <td>
                      <input
                        class="input has-text-right is-small"
                        type="tel"
                        v-model.lazy="sugar"
                        v-money="grams"
                        :placeholder="$t('sugar')"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{{$t('tea')}}</td>
                    <td>
                      <input
                        class="input has-text-right is-small"
                        type="tel"
                        v-model.lazy="tea"
                        v-money="grams"
                        :placeholder="$t('tea')"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Starter</td>
                    <td>
                      <input
                        class="input has-text-right is-small"
                        type="tel"
                        v-model.lazy="starter"
                        v-money="miliLiters"
                        :placeholder="$t('starter')"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p>{{ $t('recipeHelper') }}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { VMoney } from 'v-money'
import { mapState } from 'vuex'

export default {
  name: 'KombuchaRecipe',
  directives: { money: VMoney },
  computed: {
    ...mapState(['recipe']),
    water: {
      get: function () {
        return this.recipe.water
      },
      set: function (value) {
        this.$store.commit('SET_WATER', value)
      }
    },
    sugar: {
      get: function () {
        return this.recipe.sugar * 1000
      },
      set: function (value) {
        this.$store.commit('SET_SUGAR', value)
      }
    },
    tea: {
      get: function () {
        return this.recipe.tea * 1000
      },
      set: function (value) {
        this.$store.commit('SET_TEA', value)
      }
    },
    starter: {
      get: function () {
        return this.recipe.starter * 1000
      },
      set: function (value) {
        this.$store.commit('SET_STARTER', value)
      }
    }
  },
  data () {
    let lang = ''
    let decimal, thousands
    if (this.$route.query.l === 'pt-br') {
      decimal = ','
      thousands = '.'
      lang = 'pt-br'
    } else {
      decimal = '.'
      thousands = ','
      lang = 'en-us'
    }
    return {
      lang,
      liters: {
        decimal,
        thousands,
        suffix: ' L',
        precision: 0
      },
      miliLiters: {
        decimal,
        thousands,
        suffix: ' mL',
        precision: 0
      },
      grams: {
        decimal,
        thousands,
        suffix: ' g',
        precision: 0
      }
    }
  }
}
</script>

<style scoped>
.table > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) {
  width: 20%;
}
</style>
