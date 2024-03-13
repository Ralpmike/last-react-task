import React, { useContext, useState } from "react";
import Logo from "../imgaes/logo.webp";
import { NavLink, Link, Outlet } from "react-router-dom";
import { FaBars,  FaLinkedinIn, FaTimes } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { MyAuth } from "../context/AuthContext";

const NavBar = () => {

  const {Logout, isLoggedIn, postId} = useContext(MyAuth)

  const [state, setState] = useState(false);
  const handleChange = (e) => {
    e.preventDefault()
      setState(!state)
  }
  return (
    <div className="nav-bar">
      <div className="nav-content">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h1>Cohort Blog</h1>
        </div>
        <div className={!state? "links" : "links  return"}>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About Us</NavLink>
            <NavLink to='blog'>Blog</NavLink>
            <NavLink to='services'> Services</NavLink>
            <NavLink to={`single/${postId}`}>SingleBlog</NavLink>
           {
            isLoggedIn? <Link className="login" onClick={Logout}>Logout</Link>:
             <Link to="signin" className="login">Login</Link>
           }
            
          </nav>
          <div className="socials">
            <FaLinkedinIn size={25} color="blue"/>
            <IoDiamond size={25}/>
            <NavLink>Contact Us</NavLink>
          </div>
        </div>
        <div className="hamburger" onClick={handleChange}>
          {!state ? <FaBars size={30} color='blue'/> :
          <FaTimes size={30} color="blue"/>}
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default NavBar;
