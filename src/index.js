import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SecondsCounter from './components/SecondsCounter';


 let count = 0;

 setInterval(() =>{
  const six = Math.floor(count / 100000000) %10;
  const five = Math.floor(count / 100000) %10;
  const four = Math.floor(count / 1000) %10;
  const three = Math.floor(count / 100) %10;
  const two = Math.floor (count / 10) %10 ;
  const one = count %10;
  count++;


ReactDOM.render(
  <React.StrictMode>
    <SecondsCounter digit6={six} digit5={five} digit4={four} digit3={three} digit2={two} digit1={one}/>
  </React.StrictMode>,
  document.getElementById('root')
);

} , 1000);
