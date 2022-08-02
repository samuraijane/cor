import React from "react";
import { Route, Routes } from 'react-router-dom'
import About from '../../routes/about/about';
import Home from '../../routes/home/home';
import Login from '../../routes/login/login';
import Mentor from '../../routes/mentor/mentor';
import Mentee from '../../routes/mentee/mentee';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="mentor" element={<Mentor />} />
        <Route path="mentee" element={<Mentee />} />
      </Routes>
    </main>
  )
}

export default Main
