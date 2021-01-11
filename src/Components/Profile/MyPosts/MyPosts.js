import React from 'react'
import Post from './Post/Post'

const MyPosts = (props) => {

    const newPostItem = React.createRef()

    const buttonHandler = () => {
        props.dispatch({ type: 'ADD-POST' })
    }

    const textareaHandler = () => {
        const text = newPostItem.current.value
        props.dispatch({ type: 'UPDATE-NEW-POST', text})
    }

    return (
        <div>
        <form className="mt-4 mb-4">
        <div className="form-row">
            <div className="col-8">
                <textarea onChange={textareaHandler} value={props.profile.postValue} className="form-control" ref={newPostItem} required></textarea>
                <div className="d-flex justify-content-end mt-2">
                <button onClick={buttonHandler} type="button" className="btn btn-primary">Add post</button>
                </div>
            </div>
        </div>
        </form>
        {props.profile.posts.map((post) => {
                return <Post post={post} key={post.id}></Post>
            })}
        </div>
    )
}

export default MyPosts