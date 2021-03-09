const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_ON_LOADING = 'TOGGLE_ON_LOADING'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  onLoading: false
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {
                            ...user, followed: true
                        }
                    } else return user
                })
            }
            case 'UNFOLLOW':
                return {
                    ...state,
                    users: state.users.map(user => {
                        if (user.id === action.userID) {
                            return {
                                ...user, followed: false
                            }
                        } else return user
                    })
                }
                case 'SET_USERS':
                    return {
                        ...state, users: action.users
                    }
                case 'SET_CURRENT_PAGE': 
                    return {
                        ...state, currentPage: action.currentPage
                    }
                case 'SET_TOTAL_USERS_COUNT':
                    return {
                        ...state, totalUsersCount: action.totalUsersCount
                    }
                case 'TOGGLE_ON_LOADING': 
                    return {
                        ...state, onLoading: action.onLoading
                    }
                default: return state
    }
}

export const follow = userID => ({type: FOLLOW, userID})
export const unFollow = userID => ({type: UNFOLLOW, userID})
export const setUsers = users => ({type: SET_USERS, users})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleOnLoading = onLoading => ({type: TOGGLE_ON_LOADING, onLoading})

export default usersReducer
