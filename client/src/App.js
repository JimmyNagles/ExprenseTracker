import React from "react";
import logo from "./logo.svg";

import Gmap from "./components/Gmap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is dummy text</h1>
      </header>

      <h2>this is where the map is shown</h2>

      <Gmap isMarkerShown={false} />
    </div>
  );
}

export default App;
