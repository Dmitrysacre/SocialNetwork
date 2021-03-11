import { connect } from "react-redux";
import Dialogues from "./Dialogs";
import { updateNewMessage, sendMessage } from "../../../redux/dialoguesReducer";
import WithAuthRedicrect from "../../../hoc/WithAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogues: state.dialogues.dialogues,
    messages: state.dialogues.messages,
    messageText: state.dialogues.messageText,
  };
};

export default compose(
    connect(mapStateToProps, {
        updateNewMessage,
        sendMessage,
      }),
    WithAuthRedicrect
)(Dialogues)
