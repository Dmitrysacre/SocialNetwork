import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    const newMessageTextItem = React.createRef()

    const textAreaHandler = () => {
        const text = newMessageTextItem.current.value
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE', text })
    }

    const buttonHandler = () => {
        props.dispatch({ type: 'SEND-MESSAGE' })
    }

    return (
    <div>

        <div className="d-flex">
            <ul className="list-group">
                {props.dialogues.dialogues.map((dialog, i) => {
                    return <DialogItem dialog={dialog} index={i} key={dialog.id}></DialogItem>
                })}
            </ul>

            <ul className="list-group ml-1">
                {props.dialogues.messages.map((message, i) => {
                    return <Message message={message} key={message.id}></Message>
                })}
            </ul>
            </div>

            <textarea className="form-control mt-2" value={props.dialogues.messageText} onChange={textAreaHandler} ref={newMessageTextItem} required></textarea>
            <button type="button" className="btn btn-primary" onClick={buttonHandler}>Send Message</button>
    </div>

    )
}

export default Dialogs