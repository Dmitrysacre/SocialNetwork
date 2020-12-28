import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = ({ dialogues, messages }) => {
    return (
    <div className="d-flex">

        <ul className="list-group">
            {dialogues.map((dialog, i) => {
                return <DialogItem dialog={dialog} index={i} key={dialog.id}></DialogItem>
            })}
        </ul>

        <ul className="list-group ml-1">
            {messages.map((message, i) => {
                return <Message message={message} key={message.id}></Message>
            })}
        </ul>
        
    </div>
    )
}

export default Dialogs