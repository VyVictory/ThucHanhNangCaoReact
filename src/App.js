
import './App.css';
import  { Hello,HelloFull,HelloPerson } from './components/Hello';
import Header from './components/Header';
import Car from './components/Car';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Hello/>
      <HelloPerson name="Peter"/>
      <Header />
      <HelloFull  />
      <Car/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
