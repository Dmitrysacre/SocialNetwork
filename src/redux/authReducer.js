import {authMe} from '../api/api'

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA": {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export function setUserData(id, email, login) {
  return {
    type: SET_USER_DATA, data: {id, email, login}
  }
}

export const authMeThunkCreator = () => {
  return (dispatch) => {
    authMe().then((response) => {
      const { id, email, login } = response.data.data;
      dispatch(setUserData(id, email, login));
    });
  }
}

export default authReducer;
