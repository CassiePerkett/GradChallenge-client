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
const Container = styled.div`
  color: black;
  background: papayaviolet;
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
      <Container>
        <h2>Bitcoin</h2>
        <Button>Show Details</Button>
        <Button>Hide coin</Button>
      </Container>
      <br></br>
      <Container>
        <h2>Ethereum</h2>
        <Button>Show Details</Button>
        <Button>Hide coin</Button>
      </Container>
      <br></br>
      <Container>
        <h2>Polkadot</h2>
        <Button>Show Details</Button>
        <Button>Hide coin</Button>
      </Container>
      <br></br>
      <Container>
        <h2>XRP</h2>
        <Button>Show Details</Button>
        <Button>Hide coin</Button>
      </Container>
      <br></br>
      <Container>
        <h2>Cardano</h2>
        <Button>Show Details</Button>
        <Button>Hide coin</Button>
      </Container>
      <br></br>
      <Container>
        <h2>Tether</h2>
        <Button>Show Details</Button>
        <Button>Hide coin</Button>
      </Container>
      <br></br>
      <Container>
        <h2>Binance Coin</h2>
        <Button>Show Details</Button>
        <Button>Hide coin</Button>
      </Container>
      <br></br>
      <Container>
        <h2>Litecoin</h2>
        <Button>Show Details</Button>
        <Button>Hide coin</Button>
      </Container>
      <br></br>
      <Container>
        <h2>Bitcoin Cash</h2>
        <Button>Show Details</Button>
        <Button>Hide coin</Button>
      </Container>
      <br></br>
      <Container>
        <h2>ChainLink</h2>
        <Button>Show Details</Button>
        <Button>Hide coin</Button>
      </Container>
      <br></br>
      <Container>
        <h2>Stellar</h2>
        <Button>Show Details</Button>
        <Button>Hide coin</Button>
      </Container>

    </div>
  );
}

export default App;
