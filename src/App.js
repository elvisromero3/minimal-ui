import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


function App() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');  
    const [result, setResult]= useState('');  
    const handleSave = () => {
      axios.post('https://localhost:7289/add', {
        num1: number1,
        num2: number2
      })
      .then(function (response) {
        setResult(response.data);
    
      })
    }

  return (
    <div className="App">
            <form>
              <label htmlFor="num1">Number 1</label>
                                <input 
                                    onChange={(event)=>{setNumber1(event.target.value)}}
                                    value={number1}
                                    type="number"
                                 
                                    id="num1"
                                    name="num1"/>
               <label htmlFor="num2">Number 2</label>
                                <input 
                                    onChange={(event)=>{setNumber2(event.target.value)}}
                                    value={number2}
                                    type="number"
                                 
                                    id="num2"
                                    name="num2"/>              

                            <button onClick={handleSave} 
                                type="button"
                                >
                               Calculate
                            </button>
            </form>
            <label>Result: {result}</label>
    </div>
  );
}

export default App;
