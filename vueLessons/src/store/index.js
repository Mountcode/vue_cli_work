import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
        counter: 10
    },
    mutations: {
        changeCounter (state, payload){
            state.counter += payload
        }
    },
    actions:{
        asyncChangeCounter(context,payload){
            setTimeout(() => {
                context.commit('changeCounter',payload)
            },1000)
        }
    },
    getters: {
        computedCounter (state) {
            return state.counter * 10
        }
    }
})