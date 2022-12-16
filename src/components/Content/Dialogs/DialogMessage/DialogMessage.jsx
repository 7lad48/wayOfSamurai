import React from "react";
import dialogs from './../Dialogs.module.css';

const DialogMessage = (props) => {
    return (
        <div className={dialogs.message}>{props.text}</div>
    )
}

export default DialogMessage;