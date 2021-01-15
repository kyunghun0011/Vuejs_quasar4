import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
? { status: { loggedIn: true }, user }
: { status: { loggedIn: false }, user: null};

export const auth = {
    namespaced: true,
    state : initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                user => {
                    console.log('auth.module.js loginSuccess')
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                }
                ,
                error => {
                    console.log('auth.module.js loginFailure', error)
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            ).catch(() => {
                console.log('auth.module.js loginFailure')
            });
        },
        logout({ commit }) {
            console.log('auth.module.js logout')
            AuthService.logout(); 
            commit('logout');
        },
        register({ commit }, user) {
            return AuthService.register(user).then(
                response => {
                    console.log('auth.module.js registerSuccess')
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                error => {
                    console.log('auth.module.js registerFailure', error)
                    commit('registerFailure');
                    return Promise.reject(error);
                }
            );
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
}