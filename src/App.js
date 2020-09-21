import React from 'react';
import './App.css';

function App() {
  function countSheep(sheep) {
    //Base Case
    if (sheep === 0) {
      return "All sheep jumped over the fence"
    }
    //General Case
    else {
      let str = `${sheep}: Another sheep jumps over the fence`;
      return str + countSheep(sheep - 1)
    }
  }
  
  return (
    <div className="App">
    
    {countSheep(3)}

    </div>
  );
}

export default App;
