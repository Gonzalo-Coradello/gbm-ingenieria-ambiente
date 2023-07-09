import "./App.css";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";
import Main from "./layouts/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs, ServiceView } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/servicios/:id" element={<ServiceView />} />
          <Route path="/nosotros" element={<AboutUs />} />
          {/* TODO: <Route path="/*" element={<ErrorPage />}></Route> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
