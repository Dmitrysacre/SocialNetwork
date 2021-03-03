import { connect } from 'react-redux'
import MyPosts from './MyPosts'

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch({ type: 'ADD-POST' }),
        updateNewPost: text => dispatch({ type: 'UPDATE-NEW-POST', text})
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer