import ReactDOM from 'react-dom/client';
import './style/index.css'

import App from './App'
import BlogPage from './pages/blog/BlogPage'

import React from 'react';
import Root from './routes/root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'blog/:id',
        element: <BlogPage />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
