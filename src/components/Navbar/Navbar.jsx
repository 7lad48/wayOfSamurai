import React from "react";
import navbar from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <NavLink className={({isActive}) => isActive ? `${navbar.link} ${navbar.active}` : navbar.link} to="/profile">Профиль</NavLink>
            <NavLink className={({isActive}) => isActive ? `${navbar.link} ${navbar.active}` : navbar.link} to="/dialogs">Сообщения</NavLink>
            <NavLink className={({isActive}) => isActive ? `${navbar.link} ${navbar.active}` : navbar.link} to="/news">Новости</NavLink>
            <NavLink className={({isActive}) => isActive ? `${navbar.link} ${navbar.active}` : navbar.link} to="/music">Музыка</NavLink>
            <NavLink className={({isActive}) => isActive ? `${navbar.link} ${navbar.active}` : navbar.link} to="/settings">Настройки</NavLink>
        </nav>
    );
}

export default Navbar;