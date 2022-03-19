import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'; 
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
import TelegramLoginButton from 'react-telegram-login';
import './styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import resumeData from '../../Utils/resumeData';
import CustomButton from '../Button/Button';


const Header = () => {
  const location = useLocation();
  const pathName = location?.pathname; //working
  console.log('pathName', pathName)
  return (
    <Navbar expand="lg" sticky='top' className='header'>
      <Nav.Link as={NavLink} to="/" className='header_navlink'>
      <Navbar.Brand className='header_home'>
      <HomeIcon/>
      </Navbar.Brand>
     </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Nav className='header_left'>
        {/* Resume Link */}
          <Nav.Link as={NavLink} to="/"
          className={pathName == "/" ? "header_link_active" : "header_link"}>
          Resume
          </Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link as={NavLink} to="/Portfolio"
          className={pathName == "/Portfolio" ? "header_link_active" : "header_link"}>
          Portfolio
          </Nav.Link>
          </Nav>
          <div className='header_right'>
            {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
            ))}

            <CustomButton text={'Hire Me'} icon={<TelegramIcon />} />
          </div>

          </Navbar.Collapse>
     </Navbar>



  )
}

export default Header