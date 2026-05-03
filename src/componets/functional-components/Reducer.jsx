import React, { useRef } from "react";

const Reducer = () => {
  let count = useRef(0); // does not re-render UI but can persist the value

  const handelCount = () => {
    count.current = count.current + 1;
    console.log(count);
  };
  return (
    <div>
      <h1>count : {count.current} </h1>
      <button onClick={handelCount}>click</button>
    </div>
  );
};

export default Reducer;
