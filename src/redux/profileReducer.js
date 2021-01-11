function profileReducer(action, state) {

    if (action.type === 'ADD-POST') {
        const newPost = {id: new Date(), text: state.postValue}
        state.posts.push(newPost)
        state.postValue = ''
      }
      else if (action.type === 'UPDATE-NEW-POST') {
        state.postValue = action.text
      }

      return state
}

export default profileReducer