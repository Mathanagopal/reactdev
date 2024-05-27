import {useEffect, useState} from "react";

const App = () => {
  let [count,seCount] = useState(0);
  let [increment,setIncrement] = useState(0);

  //runs only once when the component is mounted.
  useEffect(() =>{
    //console.log('Run when the component is mounted and count is updated');
    console.log('useEffect called');
    console.log('Count:', count);
    console.log('Increment', increment)

  },[count]);

const handleIncrement =() =>{
  seCount(count + 1);
  setIncrement(increment+1);
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