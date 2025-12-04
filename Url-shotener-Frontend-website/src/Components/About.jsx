import React from 'react'
import world from "../assets/world.png"
import url from "../assets/url.png"
import app from "../assets/app.png"
import userClick from "../assets/userClick.png"

const About = () => {
  return (
    <div className="about container" id='about'>
      <h1 className='text-center'>Adopted and loved by millions of users</h1>
      <div className="row justify-content-center">

        <div className="col-xl-3 col-lg-3 col-12 col-md-6 col-sm-6 col-6 card-container">
          <div className="inner-card-container">
            <img className='card-img' src={world} alt="" />
            <h2 className="card-title">
              500K+
            </h2>
            <p className="card-des">
              Global paying customers
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-12 col-md-6 col-sm-6 col-6 card-container">
          <div className="inner-card-container">
            <img className='card-img' src={url} alt="" />
            <h2 className="card-title">
              250M
            </h2>
            <p className="card-des">
              Links created monthly
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-12 col-md-6 col-sm-6 col-6 card-container">
          <div className="inner-card-container">
            <img className='card-img' src={app} alt="" />
            <h2 className="card-title">
              600+
            </h2>
            <p className="card-des">
              App integrations
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-12 col-md-6 col-sm-6 col-6 card-container">
          <div className="inner-card-container">
            <img className='card-img' src={userClick} alt="" />
            <h2 className="card-title">
              5M
            </h2>
            <p className="card-des">
            Connections clicks monthly
            </p>
          </div>
        </div>

      </div>


    </div>
  )
}

export default About