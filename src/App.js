import './App.css';
import React from 'react';
import useSecondContext from './Header/SecondContext';
function App() {
  const Name = useSecondContext("varma");
  const AnotherName = useSecondContext("uppalpati");
  return (
    <div className="App">
      <lable>Enter Name :   <input {...Name}/> </lable>
    
      <label> Enter Another Name : <input {...AnotherName}/> </label>
      <p> Hi
      {Name.initial}
      <br/>
      {AnotherName.initial}
      </p>
    </div>
  );
}
export default App;
