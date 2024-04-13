import React, { useContext, useEffect, useState } from 'react';
import '../styles/Home.css';
import { TbArrowBigRightLineFilled, TbArrowBigDownLineFilled } from 'react-icons/tb'
import ThemeContext from '../contexts/ThemeContext'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Typewriter } from 'react-simple-typewriter'
import {Link} from 'react-router-dom'


export default function Home() {

  const { theme } = useContext(ThemeContext)

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 992);

  const backgrounds = {
    false: 'url("/light-bg.jpg")',
    true: 'url("/dark-bg.jpg")',
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 992);
    };

    Aos.init()

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="container1">
      <div className="background"style={{backgroundImage: backgrounds[theme]}} >
        <div className="bio">
          <div className="container2">
            <p>
              <Typewriter
                words={['Intuitive, Reliable, and Insightful Predictive Analysis!']}
                loop={1}
                cursor={false}
                cursorStyle='_'
                cursorBlinking={false}
                typeSpeed={40}
                delaySpeed={1000}
              />
            </p>
            <p>
              <Typewriter
                words={['Empowering You to Harness the Cloud for Seamless and Precise Development.']}
                loop={1}
                cursor={false}
                cursorStyle='_'
                cursorBlinking={false}
                typeSpeed={40}
                delaySpeed={1000}
              />
            </p>
            <button
              className={`get-started ${theme ? 'light-theme' : ''}`}
              style={{
                backgroundColor: theme ? '#DD3B50' : '#57BDDD',
              }}
            >
              <Link to = "upload">
                <p>Get started</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <main>
        <section className='container3' data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out-quad">
          <div className="cont5">
            <h2><span style={{ 'color': theme ? '#DD3B50' : '#000' }}>How it works</span></h2>
            <span className="rect" style={{ 'backgroundColor': theme ? '#fff' : '#57BDDD' }}></span>
          </div>
          <div className="cards">
            <div className="card" style={{ 'background': theme ? '#363636' : '#f8f8f8' }}></div>
            {
              isWideScreen ?
                (
                  <TbArrowBigRightLineFilled size={100} className='arrow' style={{ 'color': theme ? '#DD3B50' : '#57BDDD' }} />
                )
                :
                (
                  <TbArrowBigDownLineFilled size={100} className='arrow' style={{ 'color': theme ? '#DD3B50' : '#57BDDD' }} />
                )
            }
            <div className="card" style={{ 'background': theme ? '#363636' : '#f8f8f8' }}></div>
            {
              isWideScreen ?
                (
                  <TbArrowBigRightLineFilled size={100} className='arrow' style={{ 'color': theme ? '#DD3B50' : '#57BDDD' }} />
                )
                :
                (
                  <TbArrowBigDownLineFilled size={100} className='arrow' style={{ 'color': theme ? '#DD3B50' : '#57BDDD' }} />
                )
            }
            <div className="card" style={{ 'background': theme ? '#363636' : '#f8f8f8' }}></div>
          </div>
        </section>
        <section className='container4' data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out-quad">
          <div className="why-choose">
            <div className="cont5">
              <h2><span style={{ 'color': theme ? '#DD3B50' : '#000' }}>Why choose us</span></h2>
              <span className="rect" style={{ 'backgroundColor': theme ? '#fff' : '#57BDDD' }}></span>
            </div>
            <p style={{ 'color': theme ? '#fff' : '#000' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Dolore illum consectetur animi fugiat voluptatum temporibus accusamus. Dicta, ullam.
            </p>
          </div>
          <div className="cards">
            <div className="video-card" style={{ 'background': theme ? '#363636' : '#f8f8f8' }}></div>
          </div>
        </section>
      </main>
    </div>
  );
}
