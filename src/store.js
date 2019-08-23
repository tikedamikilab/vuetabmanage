import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う',
        done: true
      },
    ],
  },
  nextTaskId: 3,
  mutations: {
    addTask(state, { name }){
      state.tasks.push({
        id: state.nextTaskId,
        name,
        done: false,
      })
      state.nextTaskId++
    },

    toggleTaskStatus(state, { id }){
      const filtered = state.tasks.filter(task =>{
        return task.id === id
      })

      filtered.forEach(task => {
        task.done = !task.done
      })
    },
    restore(state, {tasks,nextTaskId}){
      state.tasks = tasks
      state.nextTaskId = nextTaskId
    }
  },
  actions: {
    save({ state }) {
      const data = {
        tasks: state.tasks,
        nextTaskId: state.nextTaskId
      }
      localStorage.setItem('task-app-data', JSON.stringify(data))
    },
    restore({ commit }){
      const data = localStorage.getItem('task-app-data')
      if(data){
        commit('restore', JSON.parse(data))
      }
    }
  }
})
