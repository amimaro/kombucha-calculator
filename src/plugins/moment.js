import moment from 'moment'

const MomentPlugin = {
  install (Vue, options) {
    moment.locale('pt-br')
    Vue.prototype.$moment = moment
    console.log('moment - Install')
  }
}

export default MomentPlugin
