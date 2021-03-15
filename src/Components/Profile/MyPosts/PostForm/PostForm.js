import React from 'react'

const PostForm = (props) => {
    return (
        <form className="mt-4 mb-4">
        <div className="form-row">
          <div className="col-8">
            <textarea
              onChange={textareaHandler}
              value={props.postValue}
              className="form-control"
              ref={newPostItem}
              required
            ></textarea>
            <div className="d-flex justify-content-end mt-2">
              <button
                onClick={buttonHandler}
                type="button"
                className="btn btn-primary"
              >
                Add post
              </button>
            </div>
          </div>
        </div>
      </form>
    )
}

export default PostForm