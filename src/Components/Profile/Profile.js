import React from 'react'
import Avatar from './Avatar'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
    return (
            <div className="col">
                <Avatar></Avatar>
                <MyPosts posts={props.posts}></MyPosts>
            </div>
    )
}

export default Profile