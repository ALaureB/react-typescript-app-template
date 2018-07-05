import * as React from "react";
// @ts-ignore
import * as img from "../assets/start_coding.jpg";
import "../styles/App.scss";
import Hello from "./Hello";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Hello compiler="TypeScript" framework="React" />
        <p>
          This react and typescript app is configured with Webpack 4 and Babel. It also features
          File loader and Scss. You can start coding now !
        </p>
        <br/>
        <img src={img} alt="Start coding !" />
      </div>
    );
  }
}

export default App;
