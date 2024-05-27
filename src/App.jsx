import {useEffect, useState} from "react";

const App = () => {
  let [count,seCount] = useState(0);

  //runs only once when the component is mounted and whenever any state with in the component
  useEffect() =>{
    console.log('Component mounted');
  }

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