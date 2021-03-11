import { getUsers, unfollow, follow } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_ON_LOADING = "TOGGLE_ON_LOADING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  onLoading: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return {
              ...user,
              followed: true,
            };
          } else return user;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return {
              ...user,
              followed: false,
            };
          } else return user;
        }),
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.users,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "SET_TOTAL_USERS_COUNT":
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case "TOGGLE_ON_LOADING":
      return {
        ...state,
        onLoading: action.onLoading,
      };
    case "TOGGLE_IS_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((u) => u.id != action.id),
      };
    default:
      return state;
  }
};

export const followUser = (userID) => ({ type: FOLLOW, userID });
export const unFollowUser = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleOnLoading = (onLoading) => ({
  type: TOGGLE_ON_LOADING,
  onLoading,
});
export const toggleIsFollowingProgress = (followingInProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  followingInProgress,
  userId,
});

export const getUsersThunkCreateor = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleOnLoading(true));
    getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(toggleOnLoading(false));
    });
  };
};

export const unfollowThunkCreator = (id) => {
  return (dispatch) => {
      dispatch(toggleIsFollowingProgress(true, id));
      unfollow(id).then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(unFollowUser(id));
        }
        dispatch(toggleIsFollowingProgress(false, id));
      });
    }
  }

  export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id));
        unfollow(id).then((response) => {
          if (response.data.resultCode === 0) {
            dispatch(unFollowUser(id));
          }
          dispatch(toggleIsFollowingProgress(false, id));
        });
      }
    }

export default usersReducer;
