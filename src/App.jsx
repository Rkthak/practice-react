import React, { Component } from "react";
import Counter from "./componets/class-components/Counter";
import Likes from "./componets/functional-components/Likes";

export class App extends Component {
  render() {
    return (
      <div>
        <Likes />
      </div>
    );
  }
}

export default App;
