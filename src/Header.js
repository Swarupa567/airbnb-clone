import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className = 'header'>
            <Link to='/'>
                <img
                    className = "header_icon"
                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fairbnb-logo-png-logo-black-transparent-airbnb-329.png&f=1&nofb=1"
                    alt=""
                />
            </Link>
            <div className = 'header_center'>
                <input type="text" />
                <SearchIcon />
            </div>
            <div className ='header_right'>
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
