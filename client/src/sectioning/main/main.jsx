import React from "react";
import { Route, Routes } from 'react-router-dom'
import Banner from "../../components/callToAction";
import Info from '../../components/info';
import AboutUs from "../../components/AboutUs/AboutUs";
import Navbar from "../../components/navbar/Navbar"
import Form from '../../components/form/Form';


import About from '../../routes/about/about'
import Home from '../../routes/home/home'
import Mentor from '../../routes/mentor/mentor'
import Mentee from '../../routes/mentee/mentee'

import "../../styles/app.scss";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mentor" element={<Mentor />} />
        <Route path="mentee" element={<Mentee />} />
      </Routes>
    </main>
  )
}

export default Main
