import React, { createContext }  from 'react';
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header';
import Main from './sectioning/main/main';
import { useViewport } from './hooks/useViewport';
import "./styles/app.scss";
import SVGImage, { AVATAR } from "./components/svg/icons";

export const AppContext = createContext('');

const App = () => {
  const { width } = useViewport();
  const isMobileView = width && width < 769;


  return (
    <div className="App">
    <AppContext.Provider value='isLoggedIn'>
      <Header isMobileView={isMobileView} />
      <SVGImage type={AVATAR} />
      <Header />
      <Main />
      <Footer />
    </AppContext.Provider>
    </div>
  );
};

export default App;




