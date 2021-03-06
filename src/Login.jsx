import  { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { useDispatch} from "react-redux";
import { loginUser } from "./Reducers/time";
import styled from "styled-components";


import "./App.css";
const URL='http://localhost:3001/emailsvalue'
function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const[login,setLogin]=useState('')
  const[contra,setContra]=useState('')
  const[data,setData]=useState([])
  
  const validData=()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(info=>setData(info))
  }
 useEffect(()=>{
  validData()
 },[])
   //if(login === 'hola' ) setLogin('hola gente') ejemplo de condicional sin necesidad de funcion

  function handleSubmit(e){
    e.preventDefault();
    const hi= e.target.saludo.value //target. nombre del input . value
    const ingresa= e.target.pass.value // los mismo pero para le password    
    getIn(hi,ingresa) 
    dispatch(loginUser({hi}))    
  }
  const getIn=(userMail,dataPass)=>{  
    const findEmail= data.filter(e=> e.email===userMail)
    let pass= findEmail[0].password
    if( dataPass===pass){
      navigate('/page')
    }else{
      navigate('/wrong')
    }   
      }   
      
       let heightW = `${document.documentElement.clientHeight}px`
       let widthW= `${document.documentElement.clientWidth}px`
      
  return (<DivPage wmax={widthW} hmax={heightW} id='name'>
  <DivInfo> <div className="info">
    <section>
      <h2>Kiwemail</h2>
      <p>Servicio de mensajeria a nivel local con almacenamiento de base de datos</p>
    </section>
    </div>
    <div className="msgbox">
     </div><div className="tri"> 
     <div className="tri2"></div>      
      </div> </DivInfo>
    <DivForm>
    <div className="container">              
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="user" name="saludo" autoComplete="off" value={login} onChange={(e)=>setLogin(e.target.value)}>
        </input>
        <input type='password' name='pass' placeholder="password" value={contra} onChange={(e)=>setContra(e.target.value)}></input>
        <button type="submit" className="boton">Find</button>
        <DivAlert> </DivAlert>  
        <RegisterButton onClick={()=>navigate('/newuser')} > Register </RegisterButton>     
      </form>   
    </div>
    </DivForm>
    </DivPage>
  );
}
export default Form

const RegisterButton = styled.button`
  width: 70px;
 margin-left: 40%;
 background-color: #f3f2f1;
 border-radius: 3px;
 border: none;
`
const DivAlert= styled.div`
  height: 25px;
  margin-bottom: 40px;
`
const DivPage=styled.div`
  display: inline-flexbox;
  width: ${props=>props.wmax };
  height: ${props=>props.hmax};
`
const DivInfo=styled.div`
  width: 45%;
  height: 100vh;  
  background: #fff;
  font-family: 'Alegreya', serif;
  div{
    position: absolute;
    top: 25%;
    left: 20%;
    width: 200px;
  }
  h2{
    font-family: 'Edu SA Beginner', cursive;
  }
  .msgbox{
    border-radius: 10px;
    height: 150px;
    width: 200px;
    top: 60%;
    background: #0DFC7D;
    transform: rotateZ(45deg);
  }
  .tri{
    position: absolute;
    background: white;
    width: 150px;
    height: 150px;
    top: 50%;
    left: 26.5%;
    border-radius: 10px;    
  }
  .tri2{
    width: 120px;
    height: 120px;
    background-color: #3AB5E9;
    position: absolute;
    top: 10%;
    left: 10%; 
    border-radius: 10px;
  }
  
  
  
`
const DivForm=styled.div`
  //outline: 2px solid black;
  width: 55%;
  .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 30px 0 #3AB5E9;
  height: 50vh;
  max-width: 500px;  
  margin: auto;
  text-align: center;
  margin-top: 25%;
  }
  .container > form {
  width: 70%;
  border: transparent;
  padding: 20px;
  border-radius: 5px;
  background: #0DFC7D;
  display: grid;
  font-size: 20px;
}
`