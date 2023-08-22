import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navigation.css'
import { Outlet, Navigate } from "react-router-dom"
import { ReactDOM, useState } from 'react'
import Toggle from "react-toggle"
import useLocalStorage from 'use-local-storage'

import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Navigation() {
    const [navigateTo, setNavigateTo] = useState("");

    if (navigateTo != "") {
        return <Navigate to={navigateTo} />
    }
    // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    // if (isDark) {
    //     document.documentElement.classList.add("dark");
    //     document.documentElement.classList.remove("light");
    // } else {
    //     document.documentElement.classList.add("light");
    //     document.documentElement.classList.remove("dark");
    // }

    // const switchTheme = () => {
    //     const setThemeTo = theme === 'light' ? 'dark' : 'light'
    //     setTheme(setThemeTo);
    // }

    return (
        <div>
            <div id="navigation-bar">
                <div id="nav-bar-icons">
                    {/* <FontAwesomeIcon icon={faMoon} id="day-night-toggle" onClick={switchTheme} /> */}
                    {/* <FontAwesomeIcon className="nav-tab" id="nav-tab-home" icon={faHouse} value="/" onClick={() => setNavigateTo(navigateTo)} />
                    <FontAwesomeIcon className="nav-tab" id="nav-tab-projects" icon={faFolder} value="/projects" onClick={() => setNavigateTo(navigateTo)} />
                    <FontAwesomeIcon className="nav-tab" id="nav-tab-activities" icon={faPencil} value="/activites" onClick={() => setNavigateTo(navigateTo)} />
                    <FontAwesomeIcon className="nav-tab" id="nav-tab-accomplishments" icon={faTrophy} value="/accomplishments" onClick={() => setNavigateTo(navigateTo)} />
                    <FontAwesomeIcon className="nav-tab" id="nav-tab-about" icon={faUser} value="/about" onClick={() => setNavigateTo(navigateTo)} /> */}
                    <FontAwesomeIcon className="nav-tab" id="nav-tab-home" icon={faHouse} value="/" onClick={() => location.href = "/"} />
                    <FontAwesomeIcon className="nav-tab" id="nav-tab-projects" icon={faFolder} onClick={() => location.href = "/projects"} />
                    <FontAwesomeIcon className="nav-tab" id="nav-tab-activities" icon={faPencil} onClick={() => location.href = "/activities"} />
                    <FontAwesomeIcon className="nav-tab" id="nav-tab-accomplishments" icon={faTrophy} onClick={() => location.href = "/accomplishments"} />
                    <FontAwesomeIcon className="nav-tab" id="nav-tab-about" icon={faUser} onClick={() => location.href = "/about"} />
                </div>
                <div id="nav-bar-bottom">
                    <FontAwesomeIcon className="nav-social" icon={faGithub} href="github.com" onClick={() => location.href = "https://www.github.com/josephinel6"} />
                </div>
            </div>
            <Outlet />
        </div>
    )
}