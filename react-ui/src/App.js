import logo from './logo.svg';
import Navbar from "./components/navbar/Navbar"
// import './App.css';

import './styles/app.scss';

import React, { createContext }  from 'react';
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header';
import Main from './sectioning/main/main';
import { useViewport } from './hooks/useViewport';
import "./styles/app.scss";
import SVGImage, { AVATAR, FACEBOOK, GITHUB, GOOGLE, INSTAGRAM } from "./components/svg/icons";



export const AppContext = createContext('');

const App = () => {
  const { width } = useViewport();
  const isMobileView = width && width < 769;


  return (
    <div className="App">
      <SVGImage type={AVATAR} />
      <SVGImage type={FACEBOOK} />
      <SVGImage type={GITHUB} />
      <SVGImage type={GOOGLE} />
      <SVGImage type={INSTAGRAM} />
      
    <AppContext.Provider value='isLoggedIn'>
      <Header isMobileView={isMobileView} />
      <Main />
      <Footer />
    </AppContext.Provider>
    </div>
  );
};

export default App;
