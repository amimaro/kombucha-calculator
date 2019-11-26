<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <div class="field">
            <label class="label">Water</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model.lazy="form.water"
                v-money="liters"
                placeholder="Water"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Sugar</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model.lazy="form.sugar"
                v-money="grams"
                placeholder="Sugar"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Tea</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model.lazy="form.tea"
                v-money="grams"
                placeholder="Tea"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Starter</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model.lazy="form.starter"
                v-money="liters"
                placeholder="Starter"
              />
            </div>
          </div>
          <div class="is-divider"></div>
          <div class="field">
            <label class="label">Yields</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model.lazy="form.yields"
                v-money="liters"
                placeholder="Yields"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { VMoney } from 'v-money'

export default {
  name: 'KombuchaForm',
  directives: { money: VMoney },
  data () {
    let decimal, thousands
    if (this.$route.query.l === 'pt-br') {
      decimal = ','
      thousands = '.'
    } else {
      decimal = '.'
      thousands = ','
    }
    return {
      form: {
        water: 0,
        sugar: 0,
        tea: 0,
        starter: 0,
        yields: 0
      },
      liters: {
        decimal,
        thousands,
        suffix: ' L',
        precision: 2
      },
      grams: {
        decimal,
        thousands,
        suffix: ' g',
        precision: 0
      }
    }
  },
  watch: {
    form: {
      handler: function (v) {
        console.log(JSON.stringify(v))
      },
      deep: true
    }
  }
}
</script>
