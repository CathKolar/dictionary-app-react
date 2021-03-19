import reading from "./images/reading.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-image" src={reading} alt="woman reading" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Catherine Kolar</small>
      </footer>
    </div>
  );
}

export default App;
