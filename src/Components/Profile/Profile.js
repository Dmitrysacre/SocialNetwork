import React from 'react'
import Avatar from './Avatar'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
    return (
            <div className="col">
                <Avatar></Avatar>
                <MyPosts profile={props.profile} addPost={props.addPost} updateNewPost={props.updateNewPost}></MyPosts>
            </div>
    )
}

export default Profile