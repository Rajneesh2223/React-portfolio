import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function Experience() {
  return (
    <section id='experiences'>
      <h5>What Skills I have </h5>
      <h2>My Experiences</h2>
      <div className='experience__container container'>
         <div className='experience-frontened'>
         <h3> Frontened Development </h3>
         <div className='experience_+
         _content'>
           <article className='experience-details'>
           <BsPatchCheckFill className='experience__container-icon'/>
           <div> <h4>HTML</h4>
           <small className='text-light'> Experienced</small>
          </div>
           </article>
           <article className='experience-details'>
           <BsPatchCheckFill  className='experience__container-icon'/>
           <div><h4>CSS</h4>
           <small className='text-light'> Intermediate</small>
          </div> </article>
           <article className='experience-details'>
           <BsPatchCheckFill  className='experience__container-icon'/>
          <div> <h4>Javascript</h4>
           <small className='text-light'> Experienced</small>
          </div>
           </article>
           <article className='experience-details'>
           <BsPatchCheckFill  className='experience__container-icon'/>
           <div><h4>Bootstrap</h4>
           <small className='text-light'> Experienced</small></div>
           </article>
           <article className='experience-details'>
           <BsPatchCheckFill  className='experience__container-icon'/>
           <div><h4>Tailwind</h4>
           <small className='text-light'> Experienced</small></div>
           </article>
           
         </div>
         </div>
        
         <div className='experience__backend'>
          <h3>Backend Developmet</h3>
          <article className='experience-details'>
           <BsPatchCheckFill  className='experience__container-icon'/>
           <div> <h4>NODE JS</h4>
           <small className='text-light'> Experienced</small>
          </div>
           </article>
           <article className='experience-details'>
           <BsPatchCheckFill  className='experience__container-icon'/>
           <div> <h4>MONGO DB</h4>
           <small className='text-light'> Experienced</small>
          </div>
           </article>
           <article className='experience-details'>
           <BsPatchCheckFill  className='experience__container-icon'/>
           <div><h4>C++</h4>
           <small className='text-light'> Experienced</small></div>
           </article>
           <article className='experience-details'>
           <BsPatchCheckFill  className='experience__container-icon'/>
           <div><h4>MySql</h4>
           <small className='text-light'> Experienced</small></div>
           </article>

         
         </div>


      </div>
    </section >
  )
}

export default Experience
