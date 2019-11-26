<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <div class="field">
            <label class="label">{{$t('water')}}</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model.lazy="water"
                v-money="liters"
                :placeholder="$t('water')"
                @keyup="updateWater()"
              />
            </div>
            <p
              class="help"
              v-if="water !== '0.00 L' && water !== '0,00 L'"
            >{{$t('waterRatioMessage', [waterProportion(0.1), waterProportion(0.9)])}}</p>
          </div>
          <div class="field">
            <label class="label">{{$t('sugar')}}</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model.lazy="sugar"
                v-money="grams"
                :placeholder="$t('sugar')"
                @keyup="updateSugar()"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">{{$t('tea')}}</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model.lazy="tea"
                v-money="grams"
                :placeholder="$t('')"
                @keyup="updateTea()"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Starter</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model.lazy="starter"
                v-money="liters"
                placeholder="Starter"
                @keyup="updateStarter()"
              />
            </div>
          </div>
          <div class="is-divider"></div>
          <div class="field">
            <label class="label">{{$t('yields')}}</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model.lazy="yields"
                v-money="liters"
                :placeholder="$t('yields')"
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
      water: 0,
      sugar: 0,
      tea: 0,
      starter: 0,
      yields: 0,
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
      },
      recipe: {
        water: 1,
        sugar: 0.07,
        tea: 0.007,
        starter: 0.1
      }
    }
  },
  methods: {
    toNumber: function (v) {
      if (typeof v !== 'string') return
      if (this.lang === 'en-us') return parseFloat(v.replace(/,/g, ''))
      else return parseFloat(v.replace(/\./g, '').replace(/,/g, '.'))
    },
    waterProportion: function (proportion) {
      let quantity = (this.toNumber(this.water) * proportion)
      if (quantity < 1) quantity = (quantity * 1000).toFixed(0) + ' mL'
      else quantity = quantity.toFixed(2) + ' L'
      if (this.lang === 'pt-br') quantity = quantity.replace(/\./, ',')
      return quantity
    },
    updateWater: function () {
      this.starter = (this.toNumber(this.water) * this.recipe.starter).toFixed(2)
      this.sugar = (this.toNumber(this.water) * this.recipe.sugar * 10).toFixed(2)
      this.tea = (this.toNumber(this.water) * this.recipe.tea * 10).toFixed(2)
      this.yields = (this.toNumber(this.water) + this.toNumber(this.water) * this.recipe.starter).toFixed(2)
    },
    updateSugar: function () {
      this.water = (this.toNumber(this.sugar) * (this.recipe.water / this.recipe.sugar / 1000)).toFixed(2)
      this.starter = (this.toNumber(this.sugar) * (this.recipe.starter / this.recipe.sugar / 1000)).toFixed(2)
      this.tea = (this.toNumber(this.sugar) * (this.recipe.tea / this.recipe.sugar / 100)).toFixed(2)
      this.yields = (this.toNumber(this.water) + this.toNumber(this.water) * this.recipe.starter).toFixed(2)
    },
    updateTea: function () {
      this.water = (this.toNumber(this.tea) * (this.recipe.water / this.recipe.tea / 1000)).toFixed(2)
      this.starter = (this.toNumber(this.tea) * (this.recipe.starter / this.recipe.tea / 1000)).toFixed(2)
      this.sugar = (this.toNumber(this.tea) * (this.recipe.sugar / this.recipe.tea / 100)).toFixed(2)
      this.yields = (this.toNumber(this.water) + this.toNumber(this.water) * this.recipe.starter).toFixed(2)
    },
    updateStarter: function () {
      this.water = (this.toNumber(this.starter) * (this.recipe.water / this.recipe.starter)).toFixed(2)
      this.tea = (this.toNumber(this.starter) * (this.recipe.tea / this.recipe.starter * 10)).toFixed(2)
      this.sugar = (this.toNumber(this.starter) * (this.recipe.sugar / this.recipe.starter * 10)).toFixed(2)
      this.yields = (this.toNumber(this.water) + this.toNumber(this.water) * this.recipe.starter).toFixed(2)
    }
  }
}
</script>
