import React, { useState } from 'react'
// import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, createHashRouter, RouterProvider, } from "react-router-dom";

import {
  LandingPage,
  LandingPageAlt
} from './pages/index.js';

const router = createHashRouter( //createBrowserRouter(No gh-pages)
  createRoutesFromElements([
    <Route path="/" element={<LandingPageAlt />} />,
    <Route path="/alt" element={<LandingPage />} />,
    <Route path="/contact" element={<div>Contact Page</div>} />,
  ])
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
