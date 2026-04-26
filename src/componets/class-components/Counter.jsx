import React, { Component } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

export class Counter extends Component {
  state = {
    like: 0,
    dislike: 0,
  };
  handleLike = () => {
    this.setState({
      ...this.state,
      like: this.state.like + 1,
    });
  };

  handleDisLike = () => {
    this.setState({
      ...this.state,
      dislike: this.state.dislike + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleLike}>
          <FaThumbsUp /> {this.state.like}
        </button>{" "}
        <button onClick={this.handleDisLike}>
          <FaThumbsDown /> {this.state.dislike}
        </button>{" "}
      </div>
    );
  }
}

export default Counter;
