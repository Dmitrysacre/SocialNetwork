const initialState = {
    messages: [
        {id: 1, text: 'Is everything ok?'},
        {id: 2, text: 'Good job'},
        {id: 3, text: 'Ok'},
        {id: 4, text: 'How are you'},
        {id: 5, text: 'Tomorrow it can be'},
        {id: 6, text: 'Lets party tonight'},
    ],
    dialogues: [
        {id: 1, name: 'Дмитрий', count: 6},
        {id: 2, name: 'Антон', count: 20},
        {id: 3, name: 'Екатерина', count: 17},
    ],
    messageText: 'text'
}

function dialoguesReducer(state = initialState, action) {

    switch(action.type) {
        case 'UPDATE-NEW-MESSAGE': {
        const stateCopy = {...state}
        stateCopy.messageText = action.text
        return stateCopy
        }
        case 'SEND-MESSAGE': {
        const stateCopy = {...state}
        stateCopy.messages = [...state.messages]
        stateCopy.dialogues = [...state.dialogues]
        const bodyText = stateCopy.messageText
        stateCopy.messageText = ''
        stateCopy.messages.push({id: new Date(), text: bodyText})
        return stateCopy
        }

        default: return state
    }
}

export default dialoguesReducer