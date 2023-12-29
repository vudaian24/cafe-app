import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            user: null,
            count: 1,
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        increment(state) {
            state.count++
        }
    },
});

export default store;
