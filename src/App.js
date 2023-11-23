import React, {useState} from 'react';
import './App.css';
import { upperCaseLetters,lowerCaseLetters,numbers,special } from './data';

function App() {

  const[password, setPassword] = useState("");
  const[counter, setCounter] = useState(6);
  const[isUppercase, setIsUppercase] = useState(false);
  const[isLowercase, setIsLowercase] = useState(false);
  const[isNumber, setIsNumber] = useState(false);
  const[isSymbol, setIsSymbol] = useState(false);

  const increaseCounter = (e) => {
    e.preventDefault()

    if(counter < 20){
      setCounter((prevCounter) => prevCounter+1);
    }
  };
  const decreaseCounter = (e) => {
    e.preventDefault()

    if(counter > 6){
      setCounter((prevCounter) => prevCounter-1);
    }
  }

  const generatepassword = (e) => {
    e.preventDefault()

    let _password = '';

    for(let i=0; i<counter; i++){
      _password += getRandom();
    }

    setPassword(_password);
  }


  const getRandom = () =>{

    const chars = [];

    if(isUppercase){
      chars.push(upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)])
    }
    if(isLowercase){
      chars.push(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)])
    }
    if(isNumber){
      chars.push(numbers[Math.floor(Math.random() * numbers.length)])
    }
    if(isSymbol){
      chars.push(special[Math.floor(Math.random() * special.length)])
    }
    if(chars.length===0) return;

    return chars[Math.floor(Math.random() * chars.length)]
  };



  return (

    <div className='App'>
      <div className='generator'>
        <h2 className='generator__title'>Password Generator</h2>
        <h4 className='password'>{password}</h4>
      
        <form className='generator__form'>
          <div className='generator__form-controls'>
            <div className='generator__form-control'>
              <label htmlFor='uppercase'>Uppercase</label>
              <input 
              checked={isUppercase} 
              onChange={(e) => setIsUppercase(e.target.checked)} 
              type='checkbox' 
              id='uppercase' 
              name='uppercase' />
            </div>

            <div className='generator__form-control'>
              <label htmlFor='lowercase'>Lowercase</label>
              <input
              checked={isLowercase} 
              onChange={(e) => setIsLowercase(e.target.checked)}  
              type='checkbox' 
              id='lowercase' 
              name='lowercase' />
            </div>

            <div className='generator__form-control'>
              <label htmlFor='number'>Numbers</label>
              <input 
              checked={isNumber} 
              onChange={(e) => setIsNumber(e.target.checked)}  
              type='checkbox' 
              id='number' 
              name='numbers' />
            </div>
            
            <div className='generator__form-control'>
              <label htmlFor='symbols'>Symbols</label>
              <input 
              checked={isSymbol} 
              onChange={(e) => setIsSymbol(e.target.checked)}  
              type='checkbox' 
              id='symbols' 
              name='symbols' />
            </div>

            <div className='generator__length'>
              <h4 className='generator__length-title'>Password Length</h4>
              <div className='generator__length-counter'>
                <button onClick={decreaseCounter}>-</button>
                <span>{counter}</span>
                <button onClick={increaseCounter}>+</button>
              </div>
            </div>

            <div className='generator__form-actions'>
              <button onClick={generatepassword} className='generate-btn'>Generate Password</button>
              
            </div>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default App;
