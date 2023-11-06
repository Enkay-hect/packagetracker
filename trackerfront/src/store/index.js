import {createStore} from 'vuex'

import persistState from 'vuex-persist'



const toLocal = new persistState({
    key: 'id',
    storage: window.localStorage
  })

  const store = createStore
  ({
        state: {
          user: {
          },

        },

        getters: {

        },

        actions: {

        },

      mutations: {

      },

    plugins:[toLocal.plugin],

    modules: {},

  })
  export default store

