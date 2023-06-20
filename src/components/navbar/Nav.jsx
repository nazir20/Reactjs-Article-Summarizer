import React from 'react';
import './Nav.css';
import LOGO from '../../assets/logo.png';

const Nav = () => {
  return (
    <div className='nav__container'>
        <nav>
            <img src={LOGO} alt="app_logo" />
            <button type='button' onClick={()=>window.open('https://github.com/nazir20/Reactjs-Article-Summarizer')}>
                Github ↵
            </button>
        </nav>
        <div className="header__info">
          <h2>Experience the Future of Reading: Harness the Potential of <span>AI Summarization</span> Tool!</h2>
          <p>Effortlessly condense articles into concise summaries with our AI-powered tool. Save time and get to the core of any text with our quick and accurate article summarizer.</p>
        </div>
    </div>
  )
}

export default Nav