import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// React Router
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom"

// Paginas
import About from './routes/about'
import Enlist from './routes/enlist'
import Alterra from './routes/alterra'
import Home from './routes/home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "enlist",
        element: <Enlist />
      },
      {
        path: "alterra",
        element: <Alterra />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
