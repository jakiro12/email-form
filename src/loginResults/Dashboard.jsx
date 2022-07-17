import styled, {keyframes} from 'styled-components';
import {NavLink} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { dashboard} from '../Reducers/time';

import {RiMailLine,RiSendPlane2Line,RiFolderForbidFill,RiDeleteBin6Line,RiStackLine,RiGitRepositoryCommitsFill} from 'react-icons/ri'

import '../App.css';
const URL='http://localhost:3001/' 

function Dashboard(){
    const[option,setOption]=useState('')
    const msgSend=useSelector((state)=>state.primeReducer.name)   
    const dispatch=useDispatch()
    const[garbage,setGarbage]=useState([])
    const[dataMsg,setDataMsg]=useState([])
    let navigate= useNavigate()
    function mensajes(){ //bandeja de entrada
        setOption('entrada')       
    }
    function vacio(){ //elementos eliminados-- se lanza el valor previo del useState al segundo click arroja empty
        setOption('empty')
        dispatch(dashboard({option}))
    }
    function spam(){ // correo no deseado 
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
    function dating(){
        fetch(`${URL}msginbox`)
        .then(response=>response.json())
        .then(data=>setDataMsg(data))
    }
    function noSendMsgs(){
        fetch(`${URL}garbage`)
        .then(response=>response.json())
        .then(data=>setGarbage(data))
    }
    useEffect(()=>{
        noSendMsgs()
        dating()
        deleteMsgSend()
    },[])
    const newGarbage= garbage.slice(garbage.length-6,garbage.length).reverse()
    const newsData= dataMsg.slice(dataMsg.length-6,dataMsg.length).reverse()
    const deleteMsgSend=(adr)=>{        
        fetch(`${URL}deletedata`,{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({command:adr})
        })
    }
    const reSendMsg=(adr)=>{        
        fetch(`${URL}resenddata`,{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({command:adr})
        })
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
              
        <div className='contenedor'>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>

            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>

            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            
            </div>
         
        <div className='emailsf'>
           <div className='sendbutton'> <ButtonMsg  onClick={completeNewMsg}> <RiGitRepositoryCommitsFill className='colorchange'/>  Nuevo Mensaje</ButtonMsg>
           </div>
            <div className='child'> 
              <div className='foldername'><p> Carpetas</p></div> 
                <button type='submit' onClick={mensajes}> <RiMailLine />  bandeja de entrada</button>
                <button type='submit' onClick={spam}> <RiFolderForbidFill/>  correo no deseado</button>
                <button type='submit'onClick={send}><RiSendPlane2Line/>  mensajes enviados</button>
                <button type='submit' onClick={noSend}><RiStackLine/>  borradores</button>
                <button type='submit' onClick={vacio}><RiDeleteBin6Line/> elementos eliminados</button>    
            </div>
            <div className='mensajes'>
                {option === 'entrada' && <section>
                    <p> mensaje 1     </p>
                    <p>mensaje 2</p>
                    <p>mensaje 3 </p>
                    <p>mensaje 4 </p>
                    <p>mensaje 5 </p>
                    <p>mensaje 6 </p>
                    </section>}
                {option === 'empty' && <p>{msgSend.option}</p>}
                {option === 'no deseado' && <section>
                    <p>spam 1</p>
                    <p>spam 2</p>
                    <p>spam 3</p>
                    <p>spam 4</p>
                    <p>spam 5</p>
                    <p>spam 6</p>
                    </section>}
                {option === 'enviado' && newsData.map((e,i)=>{
                    return <div className='box-send' key={i}>
                        <p>Msg: {e.bodycontent} <button className='btn-delete' onClick={()=>deleteMsgSend(e)}>Borrar</button></p>  </div>
                })}
                {option === 'borrados' && newGarbage.map((e,i)=>{
                    return <div className='box-send' key={i}>
                        <p>Msg:{e.bodycontent} <button className='btn-delete' onClick={()=>reSendMsg(e)}>Reenv</button></p>  </div>
                })}
              
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
        margin-left: 78%;
       display: inline-flex;
       
    }   
`
const animate=keyframes`
    0%{
        top:100%;
    }
    100%{
       top:0%;
    }
`
const Welcome = styled.div`
    display: grid;
    align-items: center;
    background-image: linear-gradient(180deg, #fff, #db750fca);
  font-size: 50px ;
  text-align:  center;
  height: 100vh;
  
    .contenedor{                
            background: transparent;
            width: 150px;
            height:150px;           
            position:relative ;
            top: 10px;
            left: 45%;
            outline: 2px solid black;
            display: flex;
            justify-content:space-between ;
        } 
        .ball{
            width: 8px;
            height: 8px;            
            background: radial-gradient(#3605A8,#FFF);  
            position: relative;
            animation: ${animate} infinite 1s linear;
            border-radius:50% ;
        }
        .ball:nth-child(2){           
             animation: ${animate} infinite 3s linear;
        }
        .ball:nth-child(3){
            animation: ${animate} infinite 1.7s linear;
        }
        .ball:nth-child(4){           
            animation: ${animate} infinite 2s linear;
        }
        .ball:nth-child(5){           
            animation: ${animate} infinite 1.4s linear;
        }
        .ball:nth-child(7){           
             animation: ${animate} infinite 3s linear;
        }
        .ball:nth-child(8){
            animation: ${animate} infinite 1.7s linear;
        }
        .ball:nth-child(9){           
            animation: ${animate} infinite 2s linear;
        }
        .ball:nth-child(10){           
            animation: ${animate} infinite 1.4s linear;
        }
        .ball:nth-child(12){           
             animation: ${animate} infinite 3s linear;
        }
        .ball:nth-child(13){
            animation: ${animate} infinite 1.7s linear;
        }
        .ball:nth-child(14){           
            animation: ${animate} infinite 2s linear;
        }
        .ball:nth-child(15){           
            animation: ${animate} infinite 1.4s linear;
        }
        
        
       .emailsf{
          // outline: 2px solid black;
           position:  relative;
           height: 400px;
           border-top: 1px solid black ;
       }
       
       .child{
          // outline: 2px solid black;
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
           cursor: pointer;
           border: 1px solid #db750fca;
            
       }
       .mensajes{           
           width: 1080px;
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
            border-bottom: 1px solid black;
        }
        .foldername{
            height:58px;
        }
       .foldername > p{
        border: none;
        position: absolute;        
        left: 0;
        right: 0;
        top: 15px;
        text-align: center;
       }
       .btn-delete{
        height: 24px;
        width: 50px;
        text-align: center;       
        position: absolute;
        top: 35%;
        left: 90%;
        cursor: pointer;
        background: #3605A8;
        color: white;
        border: none;
        border-radius: 5px;
       }
       .box-send{
        position: relative;
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
        .colorchange{         
        background-image: linear-gradient(90deg, #06beb6, #48b1bf);          
     }
    }
    
`

