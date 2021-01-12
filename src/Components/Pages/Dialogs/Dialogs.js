import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    const newMessageTextItem = React.createRef()

    const textAreaHandler = () => {
        const text = newMessageTextItem.current.value
        props.updateNewMessage(text)
    }

    const buttonHandler = () => {
        props.sendMessage()
    }

    return (
    <div>

        <div className="d-flex">
            <ul className="list-group">
                {props.dialogues.map((dialog, i) => {
                    return <DialogItem dialog={dialog} index={i} key={dialog.id}></DialogItem>
                })}
            </ul>

            <ul className="list-group ml-1">
                {props.messages.map(message => {
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