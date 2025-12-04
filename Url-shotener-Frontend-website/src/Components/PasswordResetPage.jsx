import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { toast, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessMsg from './SuccessMsg'
import ReactLoading from 'react-loading';


const PasswordResetPage = () => {
    const [loading, setLoading] = useState(false);

    // Initialize navigate function for redirecting
    const navigate = useNavigate();

    // State to track reset password status
    const [resetPasswordStatus, setResetPasswordStatus] = useState(false);

    // Function to handle click event to redirect login page
    const handleLoginClick = () => {
        navigate("/login")
    }

    // Set up formik for form handling and validation
    const formik = useFormik({

        // Initial values
        initialValues: {
            email: ''
        },

        // Validations
        validationSchema: yup.object({
            email: yup.string()
                .email('Invalid email')
                .required('Email is required'),
        }),

        onSubmit: (values) => { // Function to handle form submission
            setLoading(true);
            axios.post("/forgotpassword", values).then(res => {
                setLoading(false);
                if (res.data.message == "User not found") {
                    toast.error("User not registered"); // Notification
                }
                else if (res.data.message == "User found") {
                    toast.success("Verification email sent", { // Notification
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Slide // Use Slide for right-side animation
                    });
                    setTimeout(() => {
                        setResetPasswordStatus(true);
                    }, 6000);
                }
            }).catch(err => {
                setLoading(false);
                toast.error("Please try again later"); // Notification
            })
        }
    })
    return (
        resetPasswordStatus ? <SuccessMsg /> :
            <div className='vh-100 d-flex justify-content-center align-items-center bg-color'>
                <div className="outer-container">
                    <p className='title'>Forgot Password</p>
                    <p className='forgot-password-text'>We’ll email you a link so you can reset your password</p>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className="input-container">
                            {
                                formik.touched.email && formik.errors.email ?
                                    <div className='erro-msg'>{formik.errors.email}</div> : null
                            }
                            <i className='bx bx-envelope'></i>
                            <input
                                type="email"
                                placeholder='Email'
                                {...formik.getFieldProps("email")}
                            ></input>
                        </div>
                        <button className='custom-btn' type="submit" >Forgot Password</button>
                    </form>
                    <hr className='line' />
                    <p className='d-flex justify-content-center mt-0 p-0 text2 login'><span onClick={handleLoginClick}>Log In</span></p>
                </div>

                {/* Toast container for displaying notifications */}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {
                    loading &&
                    <div className="loading-container">
                        <ReactLoading type="spinningBubbles" color="#ed7632" />
                    </div>
                }
            </div>
    )
}

export default PasswordResetPage