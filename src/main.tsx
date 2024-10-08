import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserHomePage from './userHome.tsx'
import Login from './login.tsx'
import Registration from './registration.tsx'
import Profile from './profile.tsx'
import Upload from './addMemory.tsx'
import ErrorPage from './error.tsx'
import Login2 from './login2.tsx'
import MediaPage from './video.tsx'
import Privacy from './privacy.tsx'
import Support from './support.tsx'

const links = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/profile',
    element: <Profile />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <Registration />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signin',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/user',
    element: <UserHomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/upload',
    element: <Upload />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login2 />,
    errorElement: <ErrorPage />
  },
  {
    path: '/media',
    element: <MediaPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/privacy',
    element: <Privacy />,
    errorElement: <ErrorPage />
  },
  {
    path: '/support',
    element: <Support />,
    errorElement: <ErrorPage />
  }
];

const router = createBrowserRouter(links)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
