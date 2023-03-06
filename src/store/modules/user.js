export default {
    namespaced: true,
    state() {
        return {
            firstName: "حسینعلی",
            lastName: "حسینی",
            userName: "dlhossein213",
            registeryDate: "1401/12/15",
            email: "hosseinali@gmail.com",
        }
    },
    getters: {
        getFirstName(state) {
            return state.firstName
        },
        getLastName(state) {
            return state.lastName
        },
        getUserName(state) {
            return state.userName
        },
        getRegisteryDate(state) {
            return state.registeryDate
        },
        getEmail(state) {
            return state.email
        },
    },
    mutations: {
        setFirstName(state, value) {
            state.firstName = value
        },
        setLastName(state, value) {
            state.lastName = value
        },
        setUserName(state, value) {
            state.userName = value
        },
        setRegisteryDate(state, value) {
            state.registeryDate = value
        },
        setEmail(state, value) {
            state.email = value
        },
    }
}