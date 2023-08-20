import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GoProjectSymlink } from 'react-icons/go';

function about() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src={ME}  alt="About Me" />
        </div>
        </div>
        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ years of Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className='about__card'>
              <GoProjectSymlink className='about__icon' />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, cum. Aspernatur perspiciatis illum, accusantium vel itaque nemo reiciendis debitis maxime provident eaque architecto perferendis. Inventore sequi rem iure numquam est.
            soluta obcaecati ipsam sequi vitae corrupti!

          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default about;
