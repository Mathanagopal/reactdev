import {useState} from "react";
import Counter from "./components/Counter";

const App = () => {
  let [count,seCount] = useState(0);
  

const handleIncrement =() =>{
  seCount(count + 1);
}


  return (
    <div>
     <Counter 
      count={count}
      />
    <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default App