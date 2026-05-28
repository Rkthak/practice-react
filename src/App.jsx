import { useDispatch, useSelector } from "react-redux";
import { selectDisLike, selectLikes, selectReaction, setDisLikes, setLikes, setreactions } from "./Redux/Fearures/reactionSlice";


const App = () => {

  const likes = useSelector(selectLikes)
  const dislikes = useSelector(selectDisLike)
  const reactions = useSelector(selectReaction)
  
  const dispatch = useDispatch()

  const handleLikes = () => {
    dispatch(setLikes())
    dispatch(setreactions("LIKE"));
  }

  
  
  const handleDisLikes = () => {
    dispatch(setDisLikes())
    dispatch(setreactions("DISLIKE"));
  }

  

  return (
    <div>
      <h1>Like : {likes} </h1><h1> dislike : {dislikes} </h1>
      <button onClick={handleLikes}>Like</button> &nbsp; &nbsp;
      <button onClick={handleDisLikes}>DisLike</button>

      <h2> {reactions.join(", ")} </h2>
    </div>
  );
};

export default App;
