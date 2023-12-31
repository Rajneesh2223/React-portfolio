import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import {RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get IN Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
       <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineEmail  className='contact__option-icon'/>
          
        <h4>Email</h4>
        <h5>rajneehkumar6267@gmail.com</h5>
        <a href='rajneeshkumar6267@gmail.com' >send a message</a>
        </article>
        <article className='contact__option'>
          <RiMessengerLine  className='contact__option-icon'/>
          
        <h4>Messenger</h4>
        <h5>rajneehkumar6267@gmail.com</h5>
        <a href='rajneeshkumar6267@gmail.com' >send a message</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp  className='contact__option-icon'/>
          
        <h4>WhatsAPP</h4>
        <h5>rajneehkumar6267@gmail.com</h5>
        <a href='rajneeshkumar6267@gmail.com' >send a message</a>
        </article>
       </div>

       <form action=''>
    <input type='text ' name='Name' placeholder='Your Full name ' required />
    <input type="email" name='email ' placeholder='Your Email' required />
    <textarea name='message' row='7' placeholder='your message'  required></textarea>
    <button type='submit' className='btn btn-primary'> Send Message</button>
       </form>
     
          
          
        
      </div>

    </section>
  )
}

export default Contact
