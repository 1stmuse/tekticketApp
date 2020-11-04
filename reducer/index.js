const initialState ={
    user:null,
    loading:true
}
const menuState ={
    menus:[],
    load:true
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
                user:action.payload.user
            }
            break
        default:
            return state
            break;
    }
}

export const menuReducer = (state=menuState, action)=>{
    switch (action.type) {
        case 'GET_MENU':
            return {
                ...state,
                menus:action.payload.menus,
                load:false
            }
            break;
        default:
            return state
            break;
    }
}