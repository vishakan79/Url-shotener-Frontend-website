import React, { useEffect, useState } from 'react'
import img from "../assets/HomeImg.jpg"
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [isScroll, setIsScroll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (event) => {
      aNodeList.forEach(a => a.classList.remove("onfocus-design"));
      event.currentTarget.classList.add("onfocus-design");
    }

    const handleMenuClick = () => {
      const menuClass = document.querySelector(".mobile-navbar-list");
      menuClass.classList.add("left");
    }

    const handleCloseClick = () => {
      const menuClass = document.querySelector(".mobile-navbar-list");
      menuClass.classList.remove("left");
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      }
      else {
        setIsScroll(false);
      }
    }

    const handleNavclick = () => {
      const menuClass = document.querySelector(".mobile-navbar-list");
      menuClass.classList.remove("left");
    }

    window.addEventListener("scroll", handleScroll);

    const menuIcon = document.querySelector(".menu");
    menuIcon.addEventListener("click", handleMenuClick);

    const closeIcon = document.querySelector(".close-icon");
    closeIcon.addEventListener("click", handleCloseClick);

    const aNodeList = document.querySelectorAll(".navbar ul li a");
    aNodeList.forEach(a => {
      a.addEventListener("click", handleClick)
    });

    const aNodeListMobile = document.querySelectorAll(".mobile-navbar-list ul li a");
    aNodeListMobile.forEach(a => {
      a.addEventListener("click", handleNavclick)
    });

    return () => {
      aNodeList.forEach(a => {
        a.removeEventListener("click", handleClick);
      })
      menuIcon.removeEventListener("click", handleMenuClick);

      window.removeEventListener("scroll", handleScroll);

      aNodeListMobile.forEach(a => {
        a.removeEventListener("click", handleNavclick)
      });
    }

  }, [])

  const signUp = () => {
    navigate("/signup");
  }

  const login = () => {
    navigate("/login");
  }
  return (
    <>
      <div className="mobile-navbar-list">
        <ul>
          <li><a href="#" className='white'>Home</a></li>
          <li><a href="#about" className='white'>About</a></li>
          <li><a href="#contact" className='white'>Contact</a></li>
        </ul>
        <i className='bx bx-x close-icon'></i>
      </div>
      <div className="home" id='home'>
        <header className={isScroll ? "scrolled" : ""}>
          <nav>
            <div className="navbar">
              <div className="logo">
                <h1 className='d-flex align-items-center'><i className='bx bx-link'></i>One Click</h1>
              </div>
              <ul>
                <li><a href="#" className='onfocus-design black'>Home</a></li>
                <li><a href="#about" className='black'>About</a></li>
                <li><a href="#contact" className='black'>Contact</a></li>
              </ul>
              <div className="login-signUp-buttons">
                <button className='login-button' onClick={login}>Login</button>
                <button className='signup-button' onClick={signUp}>Signup</button>
              </div>
            </div>
            <div className="mobile-navbar">
              <i className='bx bx-menu menu'></i>
              <div className="login-signUp-buttons">
                <button className='login-button' onClick={login}>Login</button>
                <button className='signup-button' onClick={signUp}>Signup</button>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <div className="main-container container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                <div className="intro-message">
                  <h1>Let's make with simply one click</h1>
                  <button onClick={()=> navigate("/signup")}>Get started for free <i className='bx bx-right-arrow-alt'></i></button>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <img className='homeImg' src={img} alt="" />
              </div>
            </div>
          </div>
          <About />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default Home