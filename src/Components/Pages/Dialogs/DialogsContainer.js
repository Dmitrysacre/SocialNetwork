import React from 'react'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    const state = props.store.getState()

    const updateNewMessage = (text) => {
        props.store.dispatch({ type: 'UPDATE-NEW-MESSAGE', text })
    }

    const sendMessage = () => {
        props.store.dispatch({ type: 'SEND-MESSAGE' })
    }

    return (
        <Dialogs updateNewMessage={updateNewMessage} sendMessage={sendMessage} messages={state.dialogues.messages} dialogues={state.dialogues.dialogues}></Dialogs>
    )
}

export default DialogsContainer