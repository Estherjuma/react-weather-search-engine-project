import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header">Weather app by esther</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Estherjuma" target="blank">
            Esther Juma
          </a>
          and is{" "}
          <a
            href="https://github.com/Estherjuma/react-weather-search-engine-project"
            target="blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
