import "./App.css";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";
import Main from "./layouts/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ServiceView } from "./components/ServiceView/ServiceView";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/servicios/:id" element={<ServiceView />} />
          {/* TODO: <Route path="/*" element={<ErrorPage />}></Route> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
