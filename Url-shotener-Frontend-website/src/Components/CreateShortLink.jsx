import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';

const CreateShortLink = ({ token, setCount }) => {
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState('');
  const [shortUrlCreated, setShortUrlCreated] = useState(false);

  const navigate = useNavigate();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      toast.success('Short URL copied');
    }).catch((error) => {
      toast.error('Failed to copy the URL. Please try again.');
      console.error('Copy failed: ', error);
    });
  };

  const resetForm = () => {
    setShortUrlCreated(false);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      url: ''
    },
    validationSchema: yup.object({
      url: yup.string().required('URL is required')
    }),
    onSubmit: (values) => {
      const originalUrl = values.url;
      setLoading(true);
      axios.post("/createshorturl", { originalUrl, token }).then(res => {
        setLoading(false);
        setShortUrl(res.data.shortUrl);
        setShortUrlCreated(true);
        setCount(prevCount => prevCount + 1); // Increment count
      }).catch(err => {
        setLoading(false);
        toast.error("Failed to create short URL. Please try again later.");
        console.error('Error creating short URL:', err);
      });
    }
  });

  return (
    <div className='vh-90 d-flex flex-column justify-content-center align-items-center bg-color'>
      <div className="outer-container">
        <p className='title'>Create new</p>
        <p className='text1'>Paste the url here 👇</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-container">
            {formik.touched.url && formik.errors.url ? <div className='error-msg'>{formik.errors.url}</div> : null}
            <i className='bx bx-link'></i>
            <input type="text" placeholder='URL' {...formik.getFieldProps("url")} />
          </div>
          {shortUrlCreated &&
            <div className="input-container">
              <input className='read-only' type="text" placeholder='URL' readOnly value={shortUrl} />
              <i className='bx bx-copy'></i>
            </div>
          }
          {!shortUrlCreated ?
            <button className='custom-btn' type="submit">Create</button> :
            <>
              <button className='custom-btn' type="button" onClick={copyToClipboard}>Copy short URL</button>
              <button className='secondary-btn' type="button" onClick={resetForm}>Reset</button>
            </>
          }
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        
      </div>
      {
          loading &&
          <div className="loading-container">
            <ReactLoading type="spinningBubbles" color="#ed7632" />
          </div>
        }
    </div>
  );
};

export default CreateShortLink;
