import reading1 from "./images/reading1.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-image" src={reading1} alt="woman reading" />
      </header>
      <main>
        <Dictionary />
      </main>

      <footer className="App-footer">
        <small>
          <a
            href="https://github.com/CathKolar/dictionary-app-react"
            target="blank"
            title="GitHub"
          >
            <span class="link"> Open-source code </span>
          </a>
          by
          <a
            href="https://www.linkedin.com/in/catherinekolar/"
            target="blank"
            title="LinkedIn"
          >
            <span class="link"> Catherine Kolar </span>
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
