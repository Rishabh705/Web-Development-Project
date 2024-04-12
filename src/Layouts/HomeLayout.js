import React,{useContext} from 'react'
import { Outlet } from "react-router-dom"
import Header from '../components/Header'
import Footer from '../components/Footer'
import ThemeContext from '../contexts/ThemeContext'


export default function HomeLayout() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className='page-layout' style={{'backgroundColor': theme?'#212121':'#f5f5f5'}}>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  )
}
