<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <div class="field">
            <label class="label">{{$t('wizardTitle')}}</label>
            <div class="control">
              <input
                class="input"
                type="tel"
                v-model.lazy="wizard"
                v-money="liters"
                @keyup="updateWizard()"
              />
            </div>
          </div>
          <div class="is-divider"></div>
          <div class="field">
            <label class="label">{{$t('water')}}</label>
            <div class="control">
              <input
                class="input"
                type="tel"
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
                type="tel"
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
                type="tel"
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
                type="tel"
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
                type="tel"
                v-model.lazy="yields"
                v-money="liters"
                :placeholder="$t('yields')"
                @keyup="updateYields()"
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
import { mapState } from 'vuex'

export default {
  name: 'KombuchaForm',
  directives: { money: VMoney },
  computed: {
    ...mapState(['recipe']),
    _water () {
      return this.toNumber(this.water)
    },
    _starter () {
      return this.toNumber(this.starter)
    },
    _sugar () {
      return this.toNumber(this.sugar)
    },
    _tea () {
      return this.toNumber(this.tea)
    },
    _yields () {
      return this.toNumber(this.yields)
    },
    _wizard () {
      return this.toNumber(this.wizard)
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
      wizard: 0,
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
      }
    }
  },
  methods: {
    toNumber: function (v) {
      if (typeof v !== 'string') return
      return parseFloat(v)
    },
    waterProportion: function (proportion) {
      let quantity = (this._water * proportion)
      if (quantity < 1) quantity = (quantity * 1000).toFixed(0) + ' mL'
      else quantity = quantity.toFixed(2) + ' L'
      if (this.lang === 'pt-br') quantity = quantity.replace(/\./, ',')
      return quantity
    },
    updateWater: function () {
      this.starter = (this._water * (this.recipe.starter / this.recipe.water)).toFixed(2)
      this.tea = (this._water * (this.recipe.tea / this.recipe.water * 10)).toFixed(2)
      this.sugar = (this._water * (this.recipe.sugar / this.recipe.water * 10)).toFixed(2)
      this.yields = (this._water + this._starter).toFixed(2)
    },
    updateSugar: function () {
      this.water = (this._sugar * (this.recipe.water / this.recipe.sugar / 1000)).toFixed(2)
      this.starter = (this._sugar * (this.recipe.starter / this.recipe.sugar / 1000)).toFixed(2)
      this.tea = (this._sugar * (this.recipe.tea / this.recipe.sugar / 100)).toFixed(2)
      this.yields = (this._water + this._starter).toFixed(2)
    },
    updateTea: function () {
      this.water = (this._tea * (this.recipe.water / this.recipe.tea / 1000)).toFixed(2)
      this.starter = (this._tea * (this.recipe.starter / this.recipe.tea / 1000)).toFixed(2)
      this.sugar = (this._tea * (this.recipe.sugar / this.recipe.tea / 100)).toFixed(2)
      this.yields = (this._water + this._starter).toFixed(2)
    },
    updateStarter: function () {
      this.water = (this._starter * (this.recipe.water / this.recipe.starter)).toFixed(2)
      this.tea = (this._starter * (this.recipe.tea / this.recipe.starter * 10)).toFixed(2)
      this.sugar = (this._starter * (this.recipe.sugar / this.recipe.starter * 10)).toFixed(2)
      this.yields = (this._water + this._starter).toFixed(2)
    },
    updateYields: function () {
      this.water = (this._yields * 0.9).toFixed(2)
      this.starter = (this._water * (this.recipe.starter / this.recipe.water)).toFixed(2)
      this.tea = (this._starter * (this.recipe.tea / this.recipe.starter * 10)).toFixed(2)
      this.sugar = (this._starter * (this.recipe.sugar / this.recipe.starter * 10)).toFixed(2)
    },
    updateWizard: function () {
      this.water = (this._wizard * 0.9).toFixed(2)
      this.starter = (this._water * (this.recipe.starter / this.recipe.water)).toFixed(2)
      this.tea = (this._starter * (this.recipe.tea / this.recipe.starter * 10)).toFixed(2)
      this.sugar = (this._starter * (this.recipe.sugar / this.recipe.starter * 10)).toFixed(2)
      this.yields = (this._water + this._starter).toFixed(2)
    }
  }
}
</script>
