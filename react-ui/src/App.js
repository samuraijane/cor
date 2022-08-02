
import React, { createContext }  from 'react';
import Form from './components/form/Form';
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header';
import Main from './sectioning/main/main';
import { useViewport } from './hooks/useViewport';
import Info from './components/info';
import AboutUs from "./components/AboutUs/AboutUs";
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
      <AboutUs />

      <Form />
      <Info />

      <Footer />
    </AppContext.Provider>
    </div>
  );
};

export default App;
