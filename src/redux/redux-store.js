import { combineReducers, createStore } from 'redux'
import profileReducer from './profileReducer'
import dialoguesReducer from './dialoguesReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

const reducers = combineReducers({
    profile: profileReducer,
    dialogues: dialoguesReducer,
    users: usersReducer,
    auth: authReducer
})

const store  = createStore(reducers)

window.store = store

export default store