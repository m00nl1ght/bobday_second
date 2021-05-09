import Vue from 'vue'
import Vuex from 'vuex'
import datetime from './modules/datetime'
import user from './modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        datetime,
        user
      },
})
