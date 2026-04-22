import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();

    this.state = {
      likes: 0,
    };
  }
  handleLike = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <div>
        likes : {this.state.likes}
        <button onClick={this.handleLike}>like</button>{" "}
      </div>
    );
  }
}

export default Counter;
