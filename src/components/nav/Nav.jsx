import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {LiaBookSolid} from 'react-icons/lia'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import { useState } from 'react'



function Nav() {
  const [activeNav, setactiveNav] = useState('#')

  return (
    <nav>
    <a
      href="#"
      className={activeNav === '#' ? 'active' : ''}
      onClick={() => setactiveNav('#')}
    >
      <AiOutlineHome />
    </a>
    <a
      href="#about"
      onClick={() => setactiveNav('#about')}
      className={activeNav === '#about' ? 'active' : ''}
    >
      <AiOutlineUser />
    </a>
    <a
      href="#experiences"
      onClick={() => setactiveNav('#experiences')}
      className={activeNav === '#experiences' ? 'active' : ''}
    >
      <LiaBookSolid />
    </a>
    <a
      href="#services"
      onClick={() => setactiveNav('#services')}
      className={activeNav === '#services' ? 'active' : ''}
    >
      <MdOutlineMiscellaneousServices />
    </a>
    <a
      href="#contact"
      onClick={() => setactiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}
    >
      <AiOutlineMessage />
    </a>
  </nav>
  )
}

export default Nav
