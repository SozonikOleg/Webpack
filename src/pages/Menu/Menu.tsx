import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as  styles from './Menu.module.scss'; // Импорт модуля стилей

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <div className={styles['menu-toggle']} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={styles['menu-items']}>
                <li className={styles['menu-item']}>
                    <Link to="/" >
                        Главная
                    </Link>
                </li>
                <li className={styles['menu-item']}>
                    <Link to="/explore" >
                        Поиск
                    </Link>
                </li>
                <li className={styles['menu-item']}>
                    <Link to="/notifications">
                        Уведомления
                    </Link>
                </li>
                <li className={styles['menu-item']}>
                    <Link to="/profile">
                        Профиль
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
