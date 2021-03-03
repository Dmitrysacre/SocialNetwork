const initialState = {
    posts: [
        {id: 1, text: 'This is my first post, This is my first post, '},
        {id: 2, text: 'This is my second post'},
        {id: 3, text: 'This is my third post'}
    ],
    postValue: ''
}

function profileReducer(state = initialState, action) {

    switch(action.type) {
      case 'ADD-POST': {
        const newPost = {id: new Date(), text: state.postValue, likesCount: 0}
        const stateCopy = {...state}
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost)
        stateCopy.postValue = ''
        return stateCopy
      }
      case 'UPDATE-NEW-POST': {
        const stateCopy = {...state}
        stateCopy.posts = [...state.posts]
        stateCopy.postValue = action.text
        return stateCopy
      }
      default: return state
   }
}

export default profileReducer