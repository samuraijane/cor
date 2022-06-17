import logo from './logo.svg';
import Navbar from "./components/navbar/Navbar"
import './App.css';

import React, { createContext }  from 'react';
import Form from './components/form/Form';
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header';
import Main from './sectioning/main/main';
import { useViewport } from './hooks/useViewport';
import Info from './components/info';
import AboutUs from "./components/AboutUs/AboutUs";
import "./styles/app.scss";


export const AppContext = createContext('');

const App = () => {
  const { width } = useViewport();
  const isMobileView = width && width < 769;


  return (
    <div className="App">
      <AppContext.Provider value='isLoggedIn'>
        <Header isMobileView={isMobileView} />
        <Navbar />
        <Main />
        <AboutUs />
        <Form />
        <Info />
        <Footer />
      </AppContext.Provider>
    </div>
  );
};

export default App;
