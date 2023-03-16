import "./App.css";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.3em 1em;
  margin: 2rem;
  background-color: slateblue;
  color: white;
  border-radius: 5px;
`;

function App() {
  const navbarLinks = ["Quienes somos", "Servicios", "Contacto"];
  return (
    <div className="App">
      <header className="d-flex align-items-center bor-2r justify-content-between px-5 bg-primary py-2">
        <h1 className="bor-1r m-0 p-0">GBM Ingeniería y Ambiente</h1>
        <nav className="bor-2b">
          <ul className="d-flex gap-flex-5 m-0">
            {navbarLinks.map((link) => {
              return (
                <li className="bor-1r ml-2" key={link}>
                  {link}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <Button>Botón con styled components</Button>
      <button type="button" className="btn btn-success">
        Botón con Bootstrap 4
      </button>
      Prueba
    </div>
  );
}

export default App;
