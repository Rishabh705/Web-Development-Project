import React,{useContext} from 'react'
import '../styles/Footer.css'
import github from '../img/github.png'
import lin from '../img/linkedin.png'
import { Link } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext'


export default function Footer() {

    const { theme } = useContext(ThemeContext)

    return (
        <section className="container6">
            <ul className='more-ul'>
                <li><Link to='/about' style={{ 'color': theme ? '#fff' : '#000' }}>About</Link></li>
                <li><Link to='/contact' style={{ 'color': theme ? '#fff' : '#000' }}>Contact</Link></li>
            </ul>
            <ul>
                <li><a href="https://github.com/Rishabh705/skynet"><img src={github} alt="github" height={24}/></a></li>
                <li><a href='https://www.linkedin.com/in/rishabh-singh-93b68223a'><img src={lin} alt="linkedin" height={25.4} /></a></li>
            </ul>
        </section>

    )
}
