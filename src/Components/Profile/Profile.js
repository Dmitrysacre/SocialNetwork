import React from 'react'
import Avatar from './Avatar'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
            <div className="col">
                <h1>Profile</h1>
                <Avatar></Avatar>
                <MyPosts></MyPosts>
            </div>
    )
}

export default Profile