import React, { createContext }  from 'react';
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header';
import Main from './sectioning/main/main';
import { useViewport } from './hooks/useViewport';
import './styles/style.scss';


export const AppContext = createContext('');

const App = () => {
  const { width } = useViewport();
  const isMobileView = width && width < 769;


  return (
    <AppContext.Provider value='isLoggedIn'>
      <Header isMobileView={isMobileView} />
      <Main />
      <Footer />
    </AppContext.Provider>
  );
};

export default App;
