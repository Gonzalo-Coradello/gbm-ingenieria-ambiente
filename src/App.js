import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.3em 1em;
  margin: 2rem;
  background-color: slateblue;
  color: white;
  border-radius: 5px;
`

function App() {
  return (
    <div className="App">
      <h1>GBM Ingeniería y Ambiente</h1>
      <Button>Botón con styled components</Button>
      <button type='button' className='btn btn-success'>Botón con Bootstrap</button>
    </div>
  );
}

export default App;
