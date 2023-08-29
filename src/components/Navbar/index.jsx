import React, { useState } from "react";
import {FaReact, FaBars} from 'react-icons/fa'
import {HiX} from 'react-icons/hi'
import { Link } from "react-router-dom";
import './style.scss'

const data = [
    {
        label : 'HOME',
        to : '/'
    },
    {
        label : 'ABOUT',
        to : 'About'
    },
    {
        label : 'RESUME',
        to : 'Resume'
    },
    {
        label : 'SKILLS',
        to : '/Skils'
    },
    {
        label : 'PORTFOLIO',
        to : '/Portfolio'
    },
    {
        label : 'CONTACT',
        to : '/Contact'
    }
]

const Navbar =() => {

    const [togleicon, settogleicon] = useState(false)

    const handleToglleIcon = () => {
        settogleicon(!togleicon)
    }

    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                     <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${togleicon ? 'active' : ''}` }>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link className="navbar__container__menu__item__links" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav_icon" onClick={handleToglleIcon}>
                    {
                        togleicon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )
}
export default Navbar