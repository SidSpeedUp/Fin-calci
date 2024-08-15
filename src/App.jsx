import { useState } from 'react';
import './App.css';
import Button from './Button';
const names = ['']


function App() {
  const [initial1, setFinal] = useState(50);
  const [initial2, setFinal2] = useState(50);
  const [initial3, setFinal3] = useState(50);
  function handleChange(event) {
    setFinal(event.target.value);
  }
  function handleChange2(event) {
    setFinal2(event.target.value);
  }
  function handleChange3(event) {
    setFinal3(event.target.value);
  }
  return (
    <>
    <div>
    <div className='hello'>
        <Button initial={initial1} handleChange={handleChange}/>
        <Button initial={initial2} handleChange={handleChange2}/>
        <Button initial={initial3} handleChange={handleChange3}/>
        
      </div>
    </div>
     
    </>
  );
}

export default App;
