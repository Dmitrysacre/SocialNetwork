import React from 'react'
import Post from './Post/Post'

const MyPosts = (props) => {
    return (
        <div>
            {props.posts.map((post, index) => {
                return <Post post={post} key={post.id}></Post>
            })}
        </div>
    )
}

export default MyPosts