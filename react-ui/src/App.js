import "./styles/app.scss";
import Header from "./sectioning/header/header";
import Main from "./sectioning/main/main";
import Footer from "./sectioning/footer/footer";
import SVGImage, { AVATAR, FACEBOOK, GITHUB, GOOGLE, INSTAGRAM } from "./components/svg/icons";


function App() {
  return (
    <div className="App">
      <SVGImage type={AVATAR} />
      <SVGImage type={FACEBOOK} />
      <SVGImage type={GITHUB} />
      <SVGImage type={GOOGLE} />
      <SVGImage type={INSTAGRAM} />
      
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
