import "./App.css";
import "./assets/img/logo.png";
import movies from "./assets/data/movies.json";
import Section from "./components/Section.js";

function App() {
  return (
    <div>
      <img className="logo" alt="" src="./assets/img/logo.png" />
      <div>
        {movies.map((item, index) => {
          return <Section item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
