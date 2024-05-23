const App =() =>{
  const isLoggedIn = false;
  // if(isLoggedIn){
  //   return <h1>Welcome Back!</h1>;
  // }
  // else {
  //   return <h1>Please log in.</h1>;
  // }
  // return(
  //   <div>
  //       {
  //         isLoggedIn ? <h1>Welcome back</h1> : <h1>Please Login</h1>
  //       }

  //   </div>
  // )
  return(
    <div>
        {isLoggedIn && <h1>Welcome back!</h1>}
        {!isLoggedIn && <h1>Please Login!</h1>}

    </div>
  )

}
export default App;