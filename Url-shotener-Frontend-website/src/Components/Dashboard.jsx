import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import "../Dashboard.css"

const Dashboard = ({setLogin}) => {
    const [isScroll, setIsScroll] = useState(false);
    const navigate = useNavigate();
    const createNewLink = () => {
        navigate("/createshortlink");
    }
    const loginOut = () => {
        setLogin(false);
        window.localStorage.removeItem("isLoggedIn");
        navigate("/")
    }
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

        const createBtn = document.querySelector(".create-btn");
        createBtn.addEventListener("click", () => {
            aNodeList.forEach(a => a.classList.remove("onfocus-design"));
        })

        return () => {
            aNodeList.forEach(a => {
                a.removeEventListener("click", handleClick);
            })
            menuIcon.removeEventListener("click", handleMenuClick);

            window.removeEventListener("scroll", handleScroll);

            aNodeListMobile.forEach(a => {
                a.removeEventListener("click", handleNavclick)
            });

            createBtn.removeEventListener("click", () => {
                aNodeList.forEach(a => a.classList.remove("onfocus-design"));
            })
        }
    }, [])

    return (
        <>
            <div className="mobile-navbar-list">
                <ul>
                    <li><a href="#" onClick={() => navigate("/home")} className='white'>Home</a></li>
                    <li><a href="#" onClick={() => navigate("/links")} className='white'>Links</a></li>
                    <li><a href="#" onClick={() => navigate("/analytics")} className='white'>Analytics</a></li>
                </ul>
                <i className='bx bx-x close-icon'></i>
            </div>

            <div className="dashboard">
                <header className={isScroll ? "scrolled" : ""}>
                    <nav>
                        <div className="navbar">
                            <div className="logo">
                                <h1 className='d-flex align-items-center'><i className='bx bx-link'></i>One Click</h1>
                            </div>
                            <ul>
                                <li><a href="#" onClick={() => navigate("/home")} className='onfocus-design black'>Home</a></li>
                                <li><a href="#" onClick={() => navigate("/links")} className='black'>Links</a></li>
                                <li><a href="#" onClick={() => navigate("/analytics")} className='black'>Analytics</a></li>
                            </ul>
                            <div className="login-signUp-buttons">
                                <button className='login-button' onClick={loginOut}>Logout</button>
                                <button className='signup-button create-btn' onClick={createNewLink}>Create new</button>
                            </div>
                        </div>
                        <div className="mobile-navbar">
                            <i className='bx bx-menu menu'></i>
                            <div className="login-signUp-buttons">
                                <button className='login-button' onClick={loginOut}>Logout</button>
                                <button className='signup-button' onClick={createNewLink}>Create new</button>
                            </div>
                        </div>
                    </nav>
                </header>
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard