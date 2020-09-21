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
    //General Case
    else {
      let triangle = '* '
        triangle = triangle.repeat(n) + '\n' + (triangleNumber(n - 1))
      return triangle;
    }
  }  
  console.log(triangleNumber(6));
  
  let star = '*'
  console.log(star.repeat(6))
  
  function stringSplitter (str, del){
    //Base Case
    if ( str === ''){
      return ''
    }
    //General Case
    else if (str.charAt(0) === del){
      return stringSplitter(str.substr(1), del)
    }
    else{
      return str.charAt(0) + '\n' + stringSplitter(str.substr(1), del);
    }
  }  
  console.log(stringSplitter('02/20/2020', '/'))
  
  
  //Memoization
  const cache = {0: 0, 1: 1}
  function fibonacci(n){
    //Base Case
    if (cache[n]) return cache[n]
    if (n < 2) {
      return n
    } 
    //General Case  
    else {
      let num = fibonacci(n - 1) + fibonacci(n - 2)  
      cache[n] = num
      return num
    } 
  }  
  for (let i = 0 ; i <= 100; i++) {
    console.log(fibonacci(i))
  }
  
  
  function factorial(n){
    //Base Case
    if (n === 1){
      return n
    }    
    //General Case
    else {
      let fct = n * factorial(n - 1)
      return fct
    }
  }
  console.log(factorial(5))
  
  
  function maze(path){
    //Base Case
  }
  
  let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];
  
  maze(mySmallMaze);
    
    let arr = new Array(3);
    console.log(arr)
    
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
    
      <div>Count Sheep - {countSheep(3)}</div>
      <div>Power Calculator - {powerCalculator(10, 2)}</div>
      <div>Reverse String - {reverseString('123456789')}</div>
      <div>To Binary - {toBinary(63)}</div>
      <div>Triangle Number - {triangleNumber(6)}</div>
      <div>String Splitter{stringSplitter('02/20/2020', '/')}</div>
      <div>Fibonacci - {fibonacci(7)}</div>
      <div>Factorial - {factorial(5)}</div>
      

    </div>
  );
}


export default App;