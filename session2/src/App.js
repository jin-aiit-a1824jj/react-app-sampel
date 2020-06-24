import React from 'react';

function App() {
  // const greeting = "Hi!"
  // const dom = <h1 className="foo">{greeting}</h1>;
  
  return (
    <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={()=>{console.log("I am clicked! ")}}/>
    </div>
  );
}



export default App;
