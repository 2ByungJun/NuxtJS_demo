export const state = () => ({ 
    smAt: false
}); 

export const mutations = { 
    updateSmAt (state, payload) { 
        state.smAt = payload
    } 
}
