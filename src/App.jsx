import Hello from "./components/Hello";
//Compenent App
const App = () => {
  const a=20;
  const b=10;
  const now = new Date();
  const name ='Peter';
return (
  <div>
    <Hello 
    name={name}
    age={30}
    />
    <h3>Hello World</h3>
    Date:{now.toString()}
    <p>{a} plus {b} is {a+b}</p>
  </div>
);

}

export default App;