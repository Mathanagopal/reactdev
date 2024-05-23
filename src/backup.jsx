import Hello from "./components/Hello";
//Compenent App
const App1 = () => {
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

const App = () => {
    const friends =[
      {id:1, name:'John', age:20},
      {id:2, name:'Peter', age:30},
      {id:3, name:'mathan', age:30},
    ]
    const listfriends =[];
    for (let i=0;i<friends.length;i++)
      {
        //time 40:00
      }
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {
            friends.map( (friend) =>
            <li key={friend.id}>{friend.name} {friend.age}</li>
          )
          }
        </ul>
        //using index
        <ul>
          {
            friends.map( (friend, index) =>
            <li key={index}>{friend.name} {friend.age}</li>
          )
          }
        </ul>
        </div>
    )
  }
  
  export default App