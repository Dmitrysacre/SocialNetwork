import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import {updateNewPost, addPost} from '../../../redux/profileReducer'

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        postValue: state.profile.postValue
    }
}

const MyPostsContainer = connect(mapStateToProps, {updateNewPost, addPost})(MyPosts)

export default MyPostsContainer