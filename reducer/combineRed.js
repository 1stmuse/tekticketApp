import {combineReducers} from 'redux'
import {userReducer, menuReducer} from './index'

export default combineReducers({
    user:userReducer,
    menus:menuReducer
})