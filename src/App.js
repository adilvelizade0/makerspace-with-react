import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.component";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Gallery } from "./Pages/Gallery/Gallery.page";
import { Footer } from "./components/Footer/Footer.component";
import { Contact } from "./Pages/Contact/Contact.page";

// space: "6w7ez5o8i8ir",
// accessToken: "6VdOujKPNjbwcOVmlwxXjmggJnoOCsvMY3daF3_UTuc",

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      <div className="lx-background">
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
      </div>
    </div>
  );
}

export default App;
