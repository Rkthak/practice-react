import React, { useReducer } from "react";
const reducerfxn = (state, action) => {
  switch (action.type) {
    case "LIKE":
      return state + 1;

    case "DISLIKE":
      return state - 1;
    case "GOLDEN_LIKE":
      return state + action.payLoad;
    default:
      return state;
  }
};
const Reducer = () => {
  const [like, dispatch] = useReducer(reducerfxn, 0);
  return (
    <div>
      <h1>
        likes : <span style={{ color: "blueviolet" }}>{like}</span>
      </h1>
      <button
        onClick={() => dispatch({ type: "LIKE" })}
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          fontSize: "25px",
          margin: "0px 5px",
        }}
      >
        👍
      </button>
      <button
        onClick={() => dispatch({ type: "DISLIKE", payLoad: 100 })}
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          fontSize: "25px",
          margin: "0px 5px",
        }}
      >
        👎
      </button>
      <button
        onClick={() => dispatch({ type: "GOLDEN_LIKE", payLoad: 10 })}
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          fontSize: "25px",
          margin: "0px 5px",
        }}
      >
        🩷
      </button>
    </div>
  );
};

export default Reducer;
