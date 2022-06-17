import "./styles/app.scss";
import Header from "./sectioning/header/header";
import Main from "./sectioning/main/main";
import Footer from "./sectioning/footer/footer";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
