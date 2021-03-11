import { connect } from 'react-redux'
import Dialogues from './Dialogs'
import {updateNewMessage, sendMessage} from '../../../redux/dialoguesReducer'

const mapStateToProps = (state) => {
    return {
        dialogues: state.dialogues.dialogues,
        messages: state.dialogues.messages,
        messageText: state.dialogues.messageText
    }
}

const DialoguesContainer = connect(mapStateToProps, {updateNewMessage, sendMessage})(Dialogues)

export default DialoguesContainer