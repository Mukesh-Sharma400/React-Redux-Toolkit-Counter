import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The Count is : {count}</h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(69));
        }}
      >
        incrementByAmount
      </button>
    </div>
  );
}

export default App;
