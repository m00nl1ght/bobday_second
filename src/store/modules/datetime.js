// initial state
const state = () => ({
    currentDate: Date.now(),
})

// getters
const getters = {
    getCurrentDate: state => state.currentDate
}
// actions
const actions = {
    changeWeek(state, key) {
        let currentDate = new Date(state.state.currentDate)

        if(key == 'up') {
            currentDate = currentDate.setDate(currentDate.getDate() + 7);
        } else if (key == 'down') {
            currentDate = currentDate.setDate(currentDate.getDate() - 7);
        }

        state.commit('setCurrentDate', currentDate)
    }
}

// mutations
const mutations = {
    setCurrentDate(state, date) {
        state.currentDate = new Date(date)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}