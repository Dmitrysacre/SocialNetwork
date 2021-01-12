const initialState = {
    posts: [
        {id: 1, text: 'This is my first post, This is my first post, '},
        {id: 2, text: 'This is my second post'},
        {id: 3, text: 'This is my third post'}
    ],
    postValue: 'text'
}

function profileReducer(state = initialState, action) {

    switch(action.type) {
      case 'ADD-POST':
        const newPost = {id: new Date(), text: state.postValue}
        state.posts.push(newPost)
        state.postValue = ''
        return state
      
      case 'UPDATE-NEW-POST':
        state.postValue = action.text
        return state

      default: return state
   }
}

export default profileReducer