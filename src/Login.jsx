import  { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useDispatch} from "react-redux";
import { loginUser } from "./Reducers/time";


import "./App.css";

function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const[login,setLogin]=useState('')
  const[contra,setContra]=useState('')
 
  
 
   //if(login === 'hola' ) setLogin('hola gente') ejemplo de condicional sin necesidad de funcion

  function handleSubmit(e){
    e.preventDefault();
    const hi= e.target.saludo.value //target. nombre del input . value
    const ingresa= e.target.pass.value // los mismo pero para le password
    
    getIn(hi,ingresa) 
    dispatch(loginUser({name:hi}))
    
  }
  const getIn=(hello,dataPass)=>{
    let email= 'lautaro@hotmail.com'
    let validPassword= '1234'
      
    if( hello === email && dataPass === validPassword  ) navigate('/page')
     else navigate('/wrong')
      }

      function validar(a,b){
        let passData= Number(b)
        if(!a.includes('@') ||  !passData ) return <p>Invalid Data </p>
      
        
      }
      const valor = validar(login,contra) 
       
  return (
    <div className="container">
  
      <div>
        <p>Valid email:lautaro@hotmail.com</p>
        <p>Valid Password: 1234</p>
      </div>
      <pre>
        <p>{login}</p>
        <p>{contra}</p>
      </pre>      
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="user" name="saludo" autoComplete="off" value={login} onChange={(e)=>setLogin(e.target.value)}>
        </input>
        <input type='password' name='pass' placeholder="password" value={contra} onChange={(e)=>setContra(e.target.value)}></input>
        <button type="submit" className="boton" disabled={valor ? true : false} >Find</button>
        {valor}        
      </form>
      
    </div>
  );
}
export default Form