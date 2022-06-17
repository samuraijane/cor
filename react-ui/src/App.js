import React, { createContext }  from 'react';
import Form from './components/form/Form';
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header';
import Main from './sectioning/main/main';
import { useViewport } from './hooks/useViewport';

export const AppContext = createContext('');

const App = () => {
  const { width } = useViewport();
  const isMobileView = width && width < 769;

  return (
    <div className="App">
    <AppContext.Provider value='isLoggedIn'>
      <Header isMobileView={isMobileView} />
      <Main />
      <Form />
      <Footer />
    </AppContext.Provider>
    </div>
  );
};

export default App;
