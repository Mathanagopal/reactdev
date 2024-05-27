import {useState} from "react";

const App = () => {
  let [count,seCount] = useState(0);

const handleIncrement =() =>{
  seCount(count + 1);
}
const handleDecrement =() =>{
  seCount(count - 1);
}
const handleRest =() =>{
  seCount(0);
}

  return (
    <div>
      <h1>Counter: {count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleRest}>Reset</button>
    </div>
  )
}

export default App