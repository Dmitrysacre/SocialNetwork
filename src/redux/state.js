let rerenderApp = () => {
  console.log('changed')
}

const state = {
   profile: {
    posts: [
        {id: 1, text: 'This is my first post, This is my first post, '},
        {id: 2, text: 'This is my second post'},
        {id: 3, text: 'This is my third post'}
    ],
    postValue: 'etxt'
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
    ]
   }
}

export function addPost() {
    const newPost = {id: new Date(), text: state.profile.postValue}
    state.profile.posts.push(newPost)
    state.profile.postValue = ''
    rerenderApp(state)
  }

export function updateNewPost(text) {
  state.profile.postValue = text
  rerenderApp(state)
}

export const subscribe = observer => {
  rerenderApp = observer
}

export default state