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

          packagedata: [],
          searchpackage: [],
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

            packagee({commit}, packagedata){
                commit('setPackage', packagedata)
            },


            getPack({commit}, searchpackage){
                commit('getPackage', searchpackage)
            }
        },

        mutations: {

                logout: (state)=>{
                    state.user.token = null;
                    state.user.data = {};
                },

                clearpackagedata:(state)=>{
                    state.packagedata = [];
                },

                setUser: (state, userData)=>{
                    state.user.token = userData.token;
                    state.user.data = userData.user;
                    sessionStorage.setItem('TOKEN', userData.token);
                },

                setPackage:(state, payload)=>{
                    state.packagedata = payload.packagedata;
                },

                getPackage: (state, payload)=>{
                    state.searchpackage = payload.searchpackage;
                }

        },

    plugins:[toLocal.plugin],

    modules: {},

  })

  export default store

  console.log(store.state.user.data)
  console.log(store.state.packagedata)
  console.log(store.state.searchpackage)


