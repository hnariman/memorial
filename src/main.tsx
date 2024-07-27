import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserHomePage from './userHome.tsx'
import Login from './login.tsx'
import Registration from './registration.tsx'
import Profile from './profile.tsx'
import AddMemory from './addMemory.tsx'
import ErrorPage from './error.tsx'
import Login2 from './login2.tsx'
import Registration1 from './registration1.tsx'

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
    path: '/add-memory',
    element: <AddMemory />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login2 />,
    errorElement: <ErrorPage />
  },
  {
    path: '/video',
    element: '',
    errorElement: <ErrorPage />
  }
];

const router = createBrowserRouter(links)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
