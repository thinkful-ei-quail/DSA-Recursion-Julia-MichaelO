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
  
  
  
  function reverseString (str) {
    //Base Case
    if (str === ''){
      return '';
    }
    //General Case
    else {
      let revStr = str[str.length - 1];
      return revStr + reverseString(str.slice(0, -1));
    }
  }
  
  function triangleNumber(n) {
    //Base Case
    if (n == 1) {
      return '*'
    }
    else {
      let triangle = '* '
        triangle = triangle.repeat(n) + '\n' + (triangleNumber(n - 1))
      return triangle;
    }
  }
  
  console.log(triangleNumber(6));
  
  let star = '*'
  console.log(star.repeat(6))
  
  function toBinary(x) {
    if(x <= 1) {
      return x.toString();
    }
    else {
      const lsb = (x % 2).toString();
      const robs = Math.floor(x / 2);
      return toBinary(robs) + lsb;
    }
  }
    
  return (
    <div className="App">
    
      <div>{countSheep(3)}</div>
      <div>{powerCalculator(10, 2)}</div>
      <div>{reverseString('123456789')}</div>
      <div>{toBinary(63)}</div>
      <div>{triangleNumber(6)}</div>
      

    </div>
  );
}


export default App;
