import "./styles/app.scss";
import Header from "./sectioning/header/Header";
import Main from "./sectioning/main/Main";
import Footer from "./sectioning/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
