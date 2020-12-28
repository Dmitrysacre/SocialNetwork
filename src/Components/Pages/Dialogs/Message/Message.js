import React from 'react'

const Message = ({ message }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
                {message.text}
        </li>
    )
}

export default Message