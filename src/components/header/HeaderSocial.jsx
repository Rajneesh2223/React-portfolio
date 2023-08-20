import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/' target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://www.github.com/' target='_blank' rel="noopener noreferrer"><BsGithub/></a>
        <a href='https://www.twitter.com/' target='_blank'rel="noopener noreferrer" ><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocial
