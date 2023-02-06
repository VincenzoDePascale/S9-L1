import logo from "./logo.svg";
import "./App.css";
import "./Components/ButtonComponent.jsx";
import ButtonComponent from "./Components/ButtonComponent.jsx";
import ImgComponent from "./Components/ImgComponent.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ImgComponent
          link="http://placekitten.com/200/300"
          alt="gattino a caso"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <ButtonComponent backgroundColor="green" title="bottone1!" />
          <ButtonComponent backgroundColor="red" title="bottone2!" />
        </a>
      </header>
    </div>
  );
}

export default App;
