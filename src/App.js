import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
