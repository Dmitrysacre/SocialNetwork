import { connect } from 'react-redux'
import Dialogues from './Dialogs'

const mapStateToProps = (state) => {
    return {
        dialogues: state.dialogues.dialogues,
        messages: state.dialogues.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: text => dispatch({ type: 'UPDATE-NEW-MESSAGE', text }),
        sendMessage: () => dispatch({ type: 'SEND-MESSAGE' })
    }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)

export default DialoguesContainer