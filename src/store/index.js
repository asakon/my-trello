import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists): [
      {
        title: 'Backlog',
        cards: [
          { body: '英語'},
          { body: '数学'},
        ]
      },
      {
        title: 'Todo',
        cards: [
          {
            body: '科学'
          }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
    },
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
  },
  getters: {
  }
})

store.subscribe((mustation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
