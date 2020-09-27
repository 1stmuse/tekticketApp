const initialState ={
    user:null,
    loading:true
}

export const userReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user:action.payload.user,
                loading:action.payload.loading
            }
            break;
        case 'LOGOUT':
            return{
                ...state,
                loading:action.payload.loading,
                user:null
            }
        default:
            return state
            break;
    }
}