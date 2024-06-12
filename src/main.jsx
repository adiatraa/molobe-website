import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import MoviesPage from './pages/MoviesPage.jsx'
import WatchlistPage from './pages/WatchlistPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/movies",
    element: <MoviesPage/>,
  },
  {
    path: "/watchlist",
    element: <WatchlistPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
