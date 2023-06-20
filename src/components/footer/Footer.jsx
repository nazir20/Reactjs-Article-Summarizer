import React from 'react';
import {BsGithub, BsInstagram} from 'react-icons/bs';
import {AiOutlineEllipsis} from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <AiOutlineEllipsis className='dots'/>
        <a href="https://github.com/nazir20" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/nazirsharifi.af/" target='_blank'><BsInstagram/></a>
        <AiOutlineEllipsis className='dots'/>
    </footer>
  )
}

export default Footer