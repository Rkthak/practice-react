import { Component } from "react";
import Header from "./components/Header";

class App extends Component {
  render() {
    let name = "Rajkumar",
      age = 25;
    return (
      <div>
        <h1>App</h1>
        <Header name={name} age={age} />
      </div>
    );
  }
}

export default App;
