import React from 'react';
import './Nav.css';
import LOGO from '../assets/logo.png';

const Nav = () => {
  return (
    <div className='nav__container'>
        <nav>
            <img src={LOGO} alt="app_logo" />
            <button type='button' onClick={()=>window.open('https://github.com/nazir20')}>
                Github ↵
            </button>
        </nav>
    </div>
  )
}

export default Nav