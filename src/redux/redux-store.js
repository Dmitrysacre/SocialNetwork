import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from './profileReducer'
import dialoguesReducer from './dialoguesReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    profile: profileReducer,
    dialogues: dialoguesReducer,
    users: usersReducer,
    auth: authReducer
})

const store  = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store