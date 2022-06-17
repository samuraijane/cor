import "./styles/app.scss";
import Header from "./sectioning/header/header";
import Main from "./sectioning/main/main";
import Footer from "./sectioning/footer/footer";
import SVGImage, { AVATAR } from "./components/svg/icons";

function App() {
  return (
    <div className="App">
      <SVGImage type={AVATAR} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
