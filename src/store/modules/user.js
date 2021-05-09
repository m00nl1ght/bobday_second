// initial state
const state = () => ({
    users: [
        {
            id: 1,
            name: 'Иванов Иван Иванович',
            workDay:  [

            ]
        },
        {
            id: 2,
            name: 'Семенов Семен Семенович',
            workDay:  [
                
            ]
        },
        {
            id: 3,
            name: 'Петров Петр Петрович',
            workDay:  [
               '11.05.2021', '14.05.2021'
            ]
        }
    ],

    currentUserId: 1
})

// getters
const getters = {
    getUsers: state => state.users
}
// actions
const actions = {
    addWeekDay(state, date) {
        let user = state.state.users.filter(item => item.id == state.state.currentUserId)[0]
        user.workDay.push(date)

        let val = [...state.state.users.filter(item => item.id !== state.state.currentUserId), user]
        
        state.commit('setWeekDay', val)
    }
}

// mutations
const mutations = {
    setWeekDay(state, val) {
        state.users = val
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}