import React, { useEffect, useState } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import "./App.css";
import SignUpPage from './Components/SignUpPage';
import LogInPage from './Components/LogInPage';
import PasswordResetPage from './Components/PasswordResetPage';
import Dashboard from './Components/Dashboard';
import DashboardHome from './Components/DashboardHome';
import CreateShortLink from './Components/CreateShortLink';
import ShortUrlTable from './Components/ShortUrlTable';
import Analytics from './Components/Analytics';
import PrivateRoute from './Components/PrivateRoute';
import AccountActivation from './Components/AccountActivation';
import ResetPage from './Components/ResetPage';
import axios from 'axios';
import ReactLoading from 'react-loading';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState("");
  const [count, setCount] = useState(0);

  const [analyticsRes, setAnalyticsRes] = useState("");
  const [dashboardData, setDashboardData] = useState("");


  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("isLoggedIn");
    if (isLoggedIn != null) setLogin(isLoggedIn);

    const token = window.localStorage.getItem("token");
    if (token != null) setToken(token);

    if (isLoggedIn) {

      axios.post("/dashboard", { token }).then(res => {

        setAnalyticsRes(res.data.datas);        
        setDashboardData(res.data);
        setLoading(false);

      }).catch(err => {
        console.error('Error fetching short URLs:', err);
        setLoading(false);
      });

    } else {
      setLoading(false);
    }
  }, [count, token, login]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: !login ? <Home /> : <Navigate to="/home" />
    },
    {
      path: "/signup",
      element: <SignUpPage />
    },
    {
      path: "/login",
      element: <LogInPage setLogin={setLogin} setToken={setToken} />
    },
    {
      path: "/forgotpassword",
      element: <PasswordResetPage />
    },
    {
      path: "/activation/:token",
      element: <AccountActivation />
    },
    {
      path: "/resetpage/:verificationString",
      element: <ResetPage />
    },
    {
      element: <PrivateRoute isLoggedIn={login} />,
      children: [
        {
          path: "",
          element: <Dashboard setLogin={setLogin} />,
          children: [
            {
              path: "/home",
              element: <DashboardHome dashboardData={dashboardData} />,
            },
            {
              path: "/createshortlink",
              element: <CreateShortLink token={token} setCount={setCount} />,
            },
            {
              path: "/links",
              element: <ShortUrlTable analyticsRes={analyticsRes} />,
            },
            {
              path: "/analytics",
              element: <Analytics analyticsRes={analyticsRes} />,
            },
          ],
        },
      ]
    },
    {
      element: <Dashboard />,
      children: [
        {
          path: '/home',
          element: <DashboardHome />
        },
        {
          path: '/createshortlink',
          element: <CreateShortLink />
        },
        {
          path: '/links',
          element: <ShortUrlTable />
        },
        {
          path: '/analytics',
          element: <Analytics />
        }
      ]
    }
  ]);

  return (
    <div>
      {loading ? (
        <div className="loading-container bg-white">
          <ReactLoading type="spinningBubbles" color="#ed7632" />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
};

export default App;
