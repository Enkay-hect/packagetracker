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
            data:{},
            token: sessionStorage.getItem('TOKEN'),
          },

        },

        getters: {

        },

        actions: {
            signup({commit}, user){
                commit('setUser', user);
              },

              login({commit}, user){
                commit('setUser', user);
              },
        },

        mutations: {

                logout: (state)=>{
                    state.user.token = null;
                    state.user.data = {};
                },
                setUser: (state, userData)=>{
                    state.user.token = userData.token;
                    state.user.data = userData.user;
                    sessionStorage.setItem('TOKEN', userData.token);
                },

        },

    plugins:[toLocal.plugin],

    modules: {},

  })

  export default store

