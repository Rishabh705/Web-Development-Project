import React,{useContext} from 'react'
import '../styles/Footer.css'
import { FaGithub } from "react-icons/fa6";
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
                <li>
                    <a href="https://github.com/SunnyKumar-iiitt/Web-Development-Project">
                        <FaGithub size={25} color={theme ? '#e32323' : '#2bbfec'} />
                    </a>
                </li>
            </ul>
        </section>

    )
}
