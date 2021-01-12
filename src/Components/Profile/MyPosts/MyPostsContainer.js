import React from 'react'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch({ type: 'ADD-POST' })
    }

    const updateNewPost = (text) => {
        props.store.dispatch({ type: 'UPDATE-NEW-POST', text})
    }

    return (
        <MyPosts addPost={addPost} updateNewPost={updateNewPost} posts={state.profile.posts} postValue={state.profile.postValue}></MyPosts>
    )
}

export default MyPostsContainer