import "./styles/app.scss";
import Header from "./sectioning/header/header";
import Main from "./sectioning/main/main";
import Footer from "./sectioning/footer/footer";

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
