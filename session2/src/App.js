import React from 'react';

// function App() {
//   // const greeting = "Hi!"
//   // const dom = <h1 className="foo">{greeting}</h1>;
  
//   return (
//     <div>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick={()=>{console.log("I am clicked! ")}}/>
//     </div>
//   );
// }

const App = ()=>{
  return(
    <div>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  );
}

const Cat = ()=> {
  return <div>Meow!</div>
}

export default App;
