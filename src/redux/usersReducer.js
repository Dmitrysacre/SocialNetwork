const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1
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
                case 'SET-USERS':
                    return {
                        ...state, users: action.users
                    }
                case 'SET-CURRENT-PAGE': 
                    return {
                        ...state, currentPage: action.currentPage
                    }
                case 'SET-TOTAL-USERS-COUNT':
                    return {
                        ...state, totalUsersCount: action.totalUsersCount
                    }
                default: return state
    }
}

export default usersReducer
