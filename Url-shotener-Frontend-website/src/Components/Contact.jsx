import React from 'react'
import contact from "../assets/contact.jpg"
import * as yup from 'yup'
import { useFormik } from 'formik'
import { toast, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const formik = useFormik({

    // Initial values
    initialValues: {
      name: '',
      email: '',
      msg: ''
    },

    // Validations
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      email: yup.string()
        .email('Invalid email')
        .required('Email is required'),
      msg: yup.string()
        .required("Message is required")
    }),


    onSubmit: (values) => { // Function to handle form submission
      formik.resetForm();

      toast.success("Message send successful", {  // Notification
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide // Use Slide for right-side animation
      });
    }
  })
  return (
    <div className="contact-container container" id='contact'>
      <h3 className='text-center'>Get In Touch</h3>
      <div className="contact-content row d-flex justify-content-center">
        <div className="img col-xl-6 col-lg-6 col-12">
          <img src={contact} alt="" />
        </div>

        <div className="form-container col-xl-6 col-lg-6 col-12">
          <div className="form-inner-container">

            <form action="" onSubmit={formik.handleSubmit} className='form'>
              {
                formik.touched.name && formik.errors.name ?
                  <div className='erro-msg'>{formik.errors.name}</div> : null
              }
              <input
                type="text"
                placeholder='Name'
                {...formik.getFieldProps("name")}
              />
              {
                formik.touched.email && formik.errors.email ?
                  <div className='erro-msg'>{formik.errors.email}</div> : null
              }
              <input
                type="email"
                placeholder='Email'
                {...formik.getFieldProps("email")}
              />
              {
                formik.touched.msg && formik.errors.msg ?
                  <div className='erro-msg'>{formik.errors.msg}</div> : null
              }
              <textarea
                name="" id=""
                placeholder='Message'
                {...formik.getFieldProps("msg")}
              ></textarea>
              <button className='custom-btn' type='submit'>Submit</button>
            </form>

          </div>

        </div>
      </div>
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
    </div>
  )
}

export default Contact