const initialState = {
    posts: [
        {id: 1, text: 'This is my first post, This is my first post, '},
        {id: 2, text: 'This is my second post'},
        {id: 3, text: 'This is my third post'}
    ],
    postValue: '',
    profile: null
}

function profileReducer(state = initialState, action) {

    switch(action.type) {
      case 'UPDATE-NEW-POST': {
        return {
          ...state,
          postValue: action.text
        }
      }
      case 'ADD-POST': {
        return {
          ...state,
          posts: [...state.posts, {id: Date.now(), text: state.postValue} ],
          postValue: ''
        }
      }
      case 'SET-USER-PROFILE': {
        return {
          ...state, profile: action.profile
        }
      }
      default: return state
   }
}

export default profileReducer