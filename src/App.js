import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  background-color: white;
  font-size: 1em;
  margin: 1em;
  border: 2px solid;
  border-color: palevioletred;
  padding: 0.25em 1em;
  cursor: pointer;
  border-radius: 3px;
  
  &:hover {
    background-color: salmon;
    color: black;
  }
`;

const Section = styled.div`
  color: white;
  background: #7F00FF;
  background: linear-gradient(to right, #E100FF, #7F00FF);
  padding: 2em 1em;
  font-size: 1.5em;
  }
`;

function App() {
  return (
    <div className="App">
      <Section>
      <h1>Cassie's Crypto Counter</h1>
      </Section>
      <br></br>
      <p>Crytocurrency coin information will be listed below.</p>
      <br></br>
      <Button>I am a button</Button>
    </div>
  );
}

export default App;
