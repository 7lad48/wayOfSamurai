import React from "react";
import dialogs from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";


const Dialogs = (props) => {
    console.log(props.data);
    let showDialogs = (props.dialogsPage.dialogsUsers).map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let showMessage = (props.dialogsPage.dialogsMessages).map(message => <DialogMessage text={message.message} />);

    let newMessage = React.createRef();
    let addMessage = () => {
        let msg = newMessage.current.value;
        alert(msg);
    }

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                {showDialogs}
            </div>
            <div className={dialogs.messages}>
                {showMessage}
            </div>
            <div>
                <textarea ref={newMessage} cols="70" rows="6"></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Добавить</button>
            </div>
        </div>
    )
}

export default Dialogs;