const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
    messages: [
        {id: 1, text: 'Is everything ok?'},
        {id: 2, text: 'Good job'},
        {id: 3, text: 'Ok'},
        {id: 4, text: 'How are you'},
        {id: 5, text: 'Tomorrow it can be'},
        {id: 6, text: 'Lets party tonight'},
        {id: 7, text: 'Oh, very good'},
    ],
    dialogues: [
        {id: 1, name: 'Дмитрий', count: 6},
        {id: 2, name: 'Антон', count: 20},
        {id: 3, name: 'Екатерина', count: 17},
    ],
    messageText: ''
}

function dialoguesReducer(state = initialState, action) {

    switch(action.type) {
        case 'UPDATE_NEW_MESSAGE': {
            return {
                ...state,
                messageText: action.text,
            }
        }
        case 'SEND_MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, {id: new Date(), text: state.messageText}],
                messageText: ''
            }
        }

        default: return state
    }
}

export const updateNewMessage = (text) => ({
    type: UPDATE_NEW_MESSAGE, text
})

export const sendMessage = () => ({
    type: SEND_MESSAGE
})

export default dialoguesReducer