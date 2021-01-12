import React from 'react'
import Avatar from './Avatar'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return (
            <div className="col">
                <Avatar></Avatar>
                <MyPostsContainer store={props.store}></MyPostsContainer>
            </div>
    )
}

export default Profile