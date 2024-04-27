import React from 'react';
import {Link, Outlet } from 'react-router-dom';
import * as styles from './App.module.scss'
import { About }  from '@/pages/About'
import { Menu }  from '@/pages/Menu'

export const App = () => {
    return <div >
        <Menu />
        <div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
        </div>
        <br/>
        <button className={styles.button}>
        lololol
      </button>
        <br/>
    <Outlet />
    </div>
}