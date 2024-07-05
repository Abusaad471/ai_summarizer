import "./App.css";
import Demo from "./component/Demo";
import Hero from "./component/Hero";

function App() {
  return (
    <>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Hero />
          <Demo />
        </div>
      </main>
    </>
  );
}

export default App;
