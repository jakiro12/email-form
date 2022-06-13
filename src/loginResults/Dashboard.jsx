import styled, {keyframes} from 'styled-components';
import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { dashboard} from '../Reducers/time';
import {RiMailLine,RiSendPlane2Line,RiFolderForbidFill,RiDeleteBin6Line,RiStackLine,RiGitRepositoryCommitsFill} from 'react-icons/ri'

import '../App.css';

function Dashboard(){
    const[option,setOption]=useState('')
    const msgSend=useSelector((state)=>state.primeReducer.name)
    const newMessage = useSelector((state)=>state.primeReducer.mensaje)
    const dispatch=useDispatch()
    let navigate= useNavigate()
    function mensajes(){
        setOption('entrada')       
    }
    function vacio(){
        setOption('empty')
        dispatch(dashboard({option}))
    }
    function spam(){
        setOption('no deseado')
    }
    function send(){
        setOption('enviado')
    }
    function noSend(){
        setOption('borrados')
    }
    function completeNewMsg(){
        navigate('/new')
    }
    return(
    <>
    <Navigator>
        <h2>User Menu</h2>
        <div>
          <NavLink  to='/profile'> 
         
          <p>Profile</p></NavLink> 
          <NavLink to='/info' > <p>Personal Data</p></NavLink> 
        </div>
    </Navigator>
    <Welcome>    
        Welcome!  
        
        <div className='contenedor'>
            <div className="carga"></div>
            </div>
        <div className='emailsf'>
           <div className='sendbutton'> <ButtonMsg  onClick={completeNewMsg}> <RiGitRepositoryCommitsFill/>  Nuevo Mensaje</ButtonMsg>
           </div>
            <div className='child'> 
                Carpetas
                <button type='submit' onClick={mensajes}> <RiMailLine />  bandeja de entrada</button>
                <button type='submit' onClick={spam}> <RiFolderForbidFill/>  correo no deseado</button>
                <button type='submit'onClick={send}><RiSendPlane2Line/>  mensajes enviados</button>
                <button type='submit' onClick={noSend}><RiStackLine/>  borradores</button>
                <button type='submit' onClick={vacio}><RiDeleteBin6Line/> elementos eliminados</button>    
            </div>
            <div className='mensajes'>
                {option === 'entrada' && <section>
                    <p>   mensaje 1:{newMessage ? newMessage[0].newMsgSend : 'sin mensajes'}</p>
                    <p>mensaje 2 {newMessage ? newMessage[0].newMsgSend : 'sin mensajes'}</p>
                    <p>mensaje 1 {newMessage ? newMessage[0].newMsgSend : 'sin mensajes'}</p>
                    <p>mensaje 1 {newMessage ? newMessage[0].newMsgSend : 'sin mensajes'}</p>
                    <p>mensaje 3 {newMessage ? newMessage[0].newMsgSend : 'sin mensajes'}</p>
                    <p>mensaje 3 {newMessage ? newMessage[0].newMsgSend : 'sin mensajes'}</p>
                    </section>}
                {option === 'empty' && <p>{msgSend.option} </p>}
                {option === 'no deseado' && <section>
                    <p>spam 1</p>
                    <p>spam 2</p>
                    <p>spam 1</p>
                    <p>spam 1</p>
                    <p>spam 3</p>
                    <p>spam 3</p>
                    </section>}
                {option === 'enviado' && <p>Mensaje enviado</p>}
                {option === 'borrados' && <p>Mensaje no enviado</p>}
            </div>
        </div>

    </Welcome>
    </>)
}
export default Dashboard

const Navigator = styled.nav`
height: 60px;
background: linear-gradient(180deg,#25d855,#fff);
display: flex;
align-items: center;

border: transparent;
border-radius: 15px 0 15px 0;
    h2{
        font-weight: 200;
        margin: 0px;
        padding: 0px;  
        margin-left: 10px;
        white-space: nowrap;
    }
    p{
        color:black;
        text-decoration-line: none;
        line-height: 20px;  
        margin: 8px;
        font-size: 18px;
        margin-right: 5px ;
        white-space: nowrap;
    }
    div{
        margin-left: 80%;
       display: inline-flex;
       
    }   
`
const rotate= keyframes`
    from{transform:rotate(0deg);}
            to{transform:rotate(360deg);}
`
const Welcome = styled.div`
    display: grid;
    align-items: center;
  background-color: #fff;
  font-size: 50px ;
  text-align:  center;
  height: 100vh;
  
    .contenedor{    
            animation: ${rotate} 1s linear infinite;
            transform: translateZ(0);  
            border-top: 8px solid blueviolet;
            border-right: 8px solid blueviolet;
            border-bottom: 8px solid blueviolet;
            border-left: 8px solid black;
            background: transparent;
            width: 74px;
            height:74px;
            border-radius: 50%;  
            position:relative ;
            top: -20px;
            left: 48%;
        }        
       .emailsf{
           outline: 2px solid black;
           position:  relative;
           height: 400px;

       }
       .child{
           outline: 2px solid black;
           width: 250px;
           height: 400px;
           position: absolute;
           top: 0;
           display: grid;
           
       }
       
    .child >  button{
           border-radius: 3px;
           background: #beb4b4;
           font-size: 19px;
            
       }
       .mensajes{
           outline: 2px solid black;
           width: 1250px;
           position: absolute;
           left: 250px;
           height: 342px;
       }
       .mensajes >section {
          
          color: black;         
         }
       p{ //la estiqueta p trae por defecto su propio pading y margin por eso genera espacios en el section
            border-bottom: 1px solid black;
            margin: 0;
            padding: 0;
            height: 56px;
            text-align: start;
            text-indent: 10px;  //sangria en textos
            font-size: 44px; 
        }
        .sendbutton{
            height: 58px;
            background: none;
            margin-left: 250px;
        }
        
`
const ButtonMsg=styled.button` 
    border: none;
    background: none;
    position: absolute;
    top: 15px;
    left: 260px;
    color: #000000;
    height: 30px;
    width: 250px;
    font-size: 25px;
    &:hover {
        cursor: pointer;
        background-image: linear-gradient(90deg, #06beb6, #48b1bf);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

`