import { createStore } from "vuex"
import userMoudle from './modules/user.js'
import createPersistedState from "vuex-persistedstate";


const dataState = createPersistedState({
    paths: ['userData']
})


const store = createStore({
    modules: {
        userData: userMoudle
    },
    plugins: [dataState]
})

export default store