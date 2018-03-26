import React, { Component } from "react";

import "./App.css";
import MyApp from "./MyApp";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <MyApp />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
