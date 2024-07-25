import React from 'react'
import LogoImg from "../assets/Logo.png"
import NameImg from "../assets/Name.png"
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <>
    <div className='max-w-screen-2xl navbar justify-center' id='Title'>
       <div id='logo' className=''>
       <Link to={'/'}> <img src={LogoImg} loading='lazy' alt="" /></Link>
       </div>
       <div id='name' className='' >
        <Link to={'/'}><img src={NameImg} loading='lazy' alt="" /></Link>
       </div>
    </div>
    <div className="navbar bg-base-100 ">
 
  <div className="lg:flex m-auto" id='Navbar2'>
    <ul className=" flex flex-wrap space-x-3">
    <Link to={'/'}><li className='btn btn-ghost'>Home</li></Link>
    <Link to={'/academics'}><li className='btn btn-ghost'>Academics</li></Link>
    <Link to={'/admissions'}> <li className='btn btn-ghost'>Admissions</li></Link>
    <Link to={'/gallery'}> <li className='btn btn-ghost'>Gallery</li></Link>
    <Link to={'/faculty'}><li className='btn btn-ghost'>Faculty</li></Link>
    <Link to={'/students'}><li className='btn btn-ghost'>Students</li></Link>
    <Link to={'/about'}><li className='btn btn-ghost'>About Us</li></Link>
    <Link to={'/contact'}><li className='btn btn-ghost'>Contact us</li></Link>
    </ul>
  </div>
  
</div>
    </>
  )
}

export default Navbar