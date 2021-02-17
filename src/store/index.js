import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */
import router from '../router/index'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || "",
    user: {},
    status: ''
  },

  // State Getters
  getters: {
    isLoggedIn (state) {
      if (state.token != "") {
        return true
      }
    },
    authState(state) {
      return state.status
    },
    user(state) {
      return state.user
    }
  },

  // State Mutations
  mutations: {
    login_request(state) {
      state.status = 'loading'
    },
    login_success(state, token, user) {
      state.token = token
      state.user = user
      state.status = 'success'
    },
    signup_request(state) {
      state.status = 'loading'
    },
    signup_success(state) {
      state.status = 'success'
    },
    signout_success(state, token, user) {
      state.status = ''
      state.token = ''
      state.user = {}
    },
    // profile_request(state) {
    //   state.status = 'loading'
    // },
    // profile_response(state, user) {
    //   state.user = user,
    //   state.status = 'success'
    // },
    diary_request(state) {
      state.status = 'loading'
    },
    diary_response(state, diary) {
      state.diaries = diary,
      state.status = 'success'
    },
    postDiary_request(state) {
      state.status = 'loading'
    },
    postDiary_response(state) {
      state.status = 'success'
    }
  },
  actions: {
    // Login actions
    async login({ commit }, payload) {
      commit('login_request')
      let response = await axios.post('http://localhost:34000/api/login', payload)

      if(response.data.message) {
        const token = response.data.token
        const user = response.data.user
        

        localStorage.setItem('token', token)

        axios.defaults.headers.common['Authorization'] = token

        commit('login_success', token, user)
      }

      return response
    },

    // signup actions
    async signup({ commit }, payload) {
      commit('signup_request')
      let response = await axios.post('http://localhost:34000/api/register', payload)
      if(response.data.message !== undefined) {
        commit('signup_success')
      }
      return response
    },

    // User information actions
    // async getUser({commit}) {
    //   commit('profile_request')
    //   let response = await axios.get('http://localhost:34000/api/user')
    //   commit('profile_response', response.data.user)
    //   return response
    // },

    // Get User's Diaries
    async getDiaries({ commit }) {
      commit('diary_request')
      let response = await axios.get('http://localhost:34000/api/')
      commit('diary_response', response.data)
      return response
    },

    // Post diaries
    async postDiaries( { commit }, payload ) {
      commit('postDiary_request')
      let response = await axios.post('http://localhost:34000/api/user/'+ this.state.user._id, payload)

      if(response.data.success !== undefined) {
        commit('postDiary_response')
      }

      return response
    },

    // signout options
    async signout({ commit }) {
      localStorage.removeItem('token')
      commit('signout_success')
      delete axios.defaults.headers.common['Authorization']
      router.push('/login')
      return
    }
  },
  modules: {

  }
})
