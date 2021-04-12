export const state = () => ({ 
    drawer: null
}); 

export const mutations = { 
    updateDrawer (state) { 
        state.drawer = !state.drawer
    } 
}
