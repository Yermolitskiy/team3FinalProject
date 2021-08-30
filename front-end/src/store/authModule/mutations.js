
export const authMutationsIds = {
    SET_LOGGED : 'setLogged',
    SET_LOADING: 'setLoading',
    SET_ERROR: 'setError',
    SET_USER: 'setUser',
 
}

const mutations = {
    setLogged(state,bool){
        state.isLogged = bool
    },
    setLoading(state,bool){
        state.userLoading = bool
    },
    setError(state,error){
        state.error = error
    },
    setUser(state , userData){
        state.user = userData
    }
}

export default mutations