import React from 'react';
import './App.css';

function App() {
  function countSheep(sheep) {
    //Base Case
    if (sheep === 0) {
      return 'All sheep jumped over the fence \n'
    }
    //General Case
    else {
      let str = `${sheep}: Another sheep jumps over the fence \n`;
      return str + countSheep(sheep - 1)
    }
  }
  
  let expw = Math.pow(10,0)
  
  console.log(expw)
  
  function powerCalculator(base, exp) {
    //Base Case
    if(exp < 0) {
      return 'Exponent should be >= 0 \n'
    }
    //General Case
    else {
      let ans = Math.pow(base, exp) + '\n'; 
      return  ans + powerCalculator(base, exp - 1)     
    }
  }
  
  return (
    <div className="App">
    
      <div>{countSheep(3)}</div>
      <div>{powerCalculator(10, 2)}</div>

    </div>
  );
}

export default App;
