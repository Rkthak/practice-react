// state: a way to store and manage data in a component (component's memory)
// state is used to store data that can change over time and affect the rendering of the component
// in react, we can use useState hook to manage state in functional components
// the useState is a function that returns an array
// the array have a stateful value and a function to update it.

// Note: We should not update or mutate the state directly.
// Note: State change causes re-rendering.
import { useState } from "react";

const Likes = () => {
  let [reactions, setReactions] = useState({
    likes: 0,
    dislikes: 0,
  });

  // when the like button is clicked, it will call likeHandler function
  const likeHandler = () => {
    setReactions({
      ...reactions,
      likes: reactions.likes + 1,
    });
  };

  const handleDislike = () => {
    setReactions({
      ...reactions,
      dislikes: reactions.dislikes + 1,
    });
  };

  console.log(`likes: ${reactions.likes} dislikes: ${reactions.dislikes}`);

  return (
    <>
      {/* <h1>Likes: {reactions.like}</h1> */}
      <button onClick={likeHandler}>
        <span className="material-symbols-outlined">thumb_up</span>{" "}
        {reactions.likes}
      </button>
      &nbsp;
      <button onClick={handleDislike}>
        <span className="material-symbols-outlined">thumb_down</span>{" "}
        {reactions.dislikes}
      </button>
    </>
  );
};

export default Likes;
