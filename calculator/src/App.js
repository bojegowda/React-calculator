import React from "react";
import "./App.css";

//import components
import Result from "./components/Result";
import Keyboard from "./components/Keyboard";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  //created calculate function
  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  // reset result value using ssetState
  reset = () => {
    this.setState({
      result: "",
    });
  };

  // created backspace function
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1 className="header"> React Calculator </h1>
          <Result result={this.state.result} />{" "}
          <Keyboard onClick={this.onClick} />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
