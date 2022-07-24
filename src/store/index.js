import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Viktor Lukyanchenkov',
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
  },
  modules: {
  }
})
