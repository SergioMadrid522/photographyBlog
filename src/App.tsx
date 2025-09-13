//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "./index.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import About from "./About/About";
import Footer from "./Footer/Footer";
//import MorePicturesPage from "./pages/MorePictures";
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
//implements a new page where the user can see more pics
/* function App() {
  return (
    <Router>
      <Navbar />
      <Header
        websiteName={"Fabian Gallery"}
        slogan={"Capturing the silent beauty of the world"}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/more-pictures" element={<MorePicturesPage />} />
      </Routes>
    </Router>
  );
} */

export default App;
