import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactLoading from 'react-loading';

const AccountActivation = () => {
    const { token } = useParams()
    const navigate = useNavigate();
    const [status, setStatus] = useState(false);

    useEffect(() => {
        axios.post("/activateaccount", { token }).then(res => {
            if (res.data.message == "activated") {
                setStatus(true);
                navigate("/login");
            }
            else if (res.data.message == "Already activated") {
                setStatus(true);
                navigate("/login");
            }
        })
    }, [status])
    return (
        <div className="loading-container">
            <ReactLoading type="spinningBubbles" color="#ed7632" />
        </div>
    )
}

export default AccountActivation