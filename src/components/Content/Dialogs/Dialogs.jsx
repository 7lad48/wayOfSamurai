import React from "react";
import dialogs from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={dialogs.dialog + ' ' + dialogs.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const DialogMessage = (props) => {
    return (
        <div className={dialogs.message}>{props.text}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Andry'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Alexy'},
        {id: 4, name: 'George'},
        {id: 5, name: 'Andy'},
        {id: 6, name: 'Phil'},
    ];
    let showDialogs = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Its me'},
        {id: 3, message: 'trololo'},
        {id: 4, message: 'ololo'},
        {id: 5, message: 'Hello'},
        {id: 6, message: 'Yoo'},
    ];
    let showMessage = messagesData.map(message => <DialogMessage text={message.message} />);
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