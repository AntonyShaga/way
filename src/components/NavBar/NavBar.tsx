import React from "react";
import styl from './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav className={styl.nav}>
            <ul>
                <li className={styl.item}>
                    <a href=''>Profile</a>
                </li>

                <li className={`${styl.item} ${styl.item__active}`}>
                    <a href=''>Message</a>
                </li>

                <li className={styl.item}>
                    <a href=''>News</a>
                </li>

                <li className={styl.item}>
                    <a href=''>Music</a>
                </li>

                <li className={styl.item}>
                    <a href=''>Settings</a>
                </li>

            </ul>
        </nav>
    )
}