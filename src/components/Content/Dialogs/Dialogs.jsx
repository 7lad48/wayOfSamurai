import React from "react";
import dialogs from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";


const Dialogs = (props) => {
    console.log(props.data);
    let showDialogs = (props.dialogUsers).map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let showMessage = (props.dialogMessages).map(message => <DialogMessage text={message.message} />);
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