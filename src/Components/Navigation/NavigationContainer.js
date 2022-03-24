import React, {Component} from "react";

import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import logo from '../../Pictures/twitterlogo.png';

import {BrowserRouter as Link
  } from 'react-router-dom'

class NavigationContainer extends Component {
    render(){
        // if (this.state.userloggedin === 'true'){
        return(
            <React.Fragment>
                    <header className='LeftDiv'>
                        <div className="FullBar">
                            <div className='NavAndProfile'>
                                <div className="NavigationLogoContainer">
                                    <div className="TwitterLogo">
                                        <img src={logo} alt="My logo" />
                                    </div>
                                    <div className="NavigationLinkContainer">
                                        <nav className="NavigationLinks">
                                            <li>
                                                <Link to= '/' role='link' className='NavLink'>
                                                    <HomeIcon fontSize="large" title="Home">Home</HomeIcon>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to= '/' role='link' className='NavLink'>
                                                    <TagIcon fontSize="large" title="Explore">Explore</TagIcon>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to= '/' role='link' className='NavLink'>
                                                    <SearchIcon fontSize="large" title="Search">Search</SearchIcon>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to= '/' role='link' className='NavLink'>
                                                    <NotificationsNoneOutlinedIcon fontSize="large" title="Notifications">Notification</NotificationsNoneOutlinedIcon>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to= '/' role='link' className='NavLink'>
                                                    <EmailOutlinedIcon fontSize="large" title="Messages">Messages</EmailOutlinedIcon>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to= '/' role='link' className='NavLink'>
                                                    <BookmarkBorderOutlinedIcon fontSize="large" title="Bookmarks">Bookmarks</BookmarkBorderOutlinedIcon>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to= '/' role='link' className='NavLink'>
                                                    <ArticleOutlinedIcon fontSize="large" title="Lists">Lists</ArticleOutlinedIcon>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to= '/' role='link' className='NavLink'>
                                                    <PersonOutlineOutlinedIcon fontSize="large" title="Profile">Profile</PersonOutlineOutlinedIcon>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to= '/' role='link' className='NavLink'>
                                                    <MoreHorizIcon title="More">More</MoreHorizIcon>
                                                </Link>
                                            </li>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
 
            </React.Fragment>
        )
    }
} export default NavigationContainer