import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
        <Contact />
      </div>
    </div>
  );
}

export default App;
