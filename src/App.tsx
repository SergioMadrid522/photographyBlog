import "./index.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import About from "./About/About";
import Footer from "./Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Header
        websiteName={"Fabian Gallery"}
        slogan={"Capturing the silent beauty of the world"}
      />
      <Main />
      <About />
      <Footer />
    </>
  );
}

export default App;
