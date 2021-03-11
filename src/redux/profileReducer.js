import {getUserProfile} from '../api/api'

const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [
    { id: 1, text: "This is my first post, This is my first post, " },
    { id: 2, text: "This is my second post" },
    { id: 3, text: "This is my third post" },
  ],
  postValue: "",
  profile: null,
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_NEW_POST": {
      return {
        ...state,
        postValue: action.text,
      };
    }
    case "ADD_POST": {
      return {
        ...state,
        posts: [...state.posts, { id: Date.now(), text: state.postValue }],
        postValue: "",
      };
    }
    case "SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
}

export const updateNewPost = (text) => ({
  type: UPDATE_NEW_POST,
  text,
});

export const addPost = () => ({
  type: ADD_POST
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export const getUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    getUserProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  }
}

export default profileReducer;
