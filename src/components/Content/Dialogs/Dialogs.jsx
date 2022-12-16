import React from "react";
import dialogs from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {
    console.log(props.data);
    let showDialogs = (props.data.users).map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let showMessage = (props.data.usersMessages).map(message => <DialogMessage text={message.message} />);
    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                {showDialogs}
            </div>
            <div className={dialogs.messages}>
                {showMessage}
            </div>
        </div>
    )
}

export default Dialogs;