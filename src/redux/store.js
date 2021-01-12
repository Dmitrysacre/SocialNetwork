import dialoguesReducer from './dialoguesReducer'
import profileReducer from './profileReducer'

const store = {

  _state: {
    profile: {
     posts: [
         {id: 1, text: 'This is my first post, This is my first post, '},
         {id: 2, text: 'This is my second post'},
         {id: 3, text: 'This is my third post'}
     ],
     postValue: 'text'
    },
 
    dialogues: {
     messages: [
         {id: 1, text: 'Is everything ok?'},
         {id: 2, text: 'Good job'},
         {id: 3, text: 'Ok'},
         {id: 4, text: 'How are you'},
         {id: 5, text: 'Tomorrow it can be'},
         {id: 6, text: 'Lets party tonight'},
     ],
     dialogues: [
         {id: 1, name: 'Дмитрий', count: 6},
         {id: 2, name: 'Антон', count: 20},
         {id: 3, name: 'Екатерина', count: 17},
     ],
     messageText: 'text'
    }
 },

  _rerenderApp() {
    console.log('changed')
  },

  subscribe(observer) {
    this._rerenderApp = observer
  },

  getState() {
    return this._state
  },

  dispatch(action) {

    this._state.profile = profileReducer(this._state.profile, action)

    this._state.dialogues = dialoguesReducer(this._state.dialogues, action)

    this._rerenderApp()

  }
  
}

export default store