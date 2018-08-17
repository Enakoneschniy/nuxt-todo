import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import plugins from './plugins'

const store = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins,
  })
};

export default store
