import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const SuccessMsg = () => {

    // Initialize the navigate function for redirecting
    const navigate = useNavigate();

    // Function to handle click event for returning to login page
    const handleReturnClick = () => {
        navigate("/login")   // Navigate to login page
    }

    return (
        <div className='vh-100 d-flex justify-content-center align-items-center bg-color'>
            <div className="outer-container">
                <p className='title'>Verify your email</p>
                <p className='forgot-password-text'>We have send a verification link to your email kindly verify to reset your password</p>

                <hr className='line' />
                <p className='d-flex justify-content-center mt-0 p-0 text2 login'><span onClick={handleReturnClick}>Return to Login page</span></p>
            </div>
        </div>
    )
}

export default SuccessMsg