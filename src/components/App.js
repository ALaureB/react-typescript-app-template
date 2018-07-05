import React, { Component } from "react";
import "../styles/App.scss";
import start_coding from "../assets/start_coding.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <p>
          This react app is configured with Webpack 4 and Babel. It also
          features File loader and Scss. You can start coding now !
        </p>
        <img src={start_coding} alt="This is an image" />
      </div>
    );
  }
}

export default App;
