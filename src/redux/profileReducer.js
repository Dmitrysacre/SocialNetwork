import { getStatus, getUserProfile, updateStatus } from "../api/api";

const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  posts: [
    { id: 1, text: "This is my first post, This is my first post, " },
    { id: 2, text: "This is my second post" },
    { id: 3, text: "This is my third post" },
  ],
  postValue: "",
  profile: null,
  status: "",
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
    case "SET_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
}

// AC

export const updateNewPost = (text) => ({
  type: UPDATE_NEW_POST,
  text,
});

export const addPost = () => ({
  type: ADD_POST,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

// Thunks

export const getUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    getUserProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getStatusThunk = (id) => {
  return (dispatch) => {
    getStatus(id).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
}

export default profileReducer;
