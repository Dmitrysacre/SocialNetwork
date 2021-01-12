import { combineReducers, createStore } from 'redux'
import profileReducer from './profileReducer'
import dialoguesReducer from './dialoguesReducer'

const reducers = combineReducers({
    profile: profileReducer,
    dialogues: dialoguesReducer,
})

const store  = createStore(reducers)

export default store