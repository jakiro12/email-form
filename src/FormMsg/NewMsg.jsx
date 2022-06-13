import { useState } from "react";
import { msgcontroller} from '../Reducers/time';
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function NewMessage(){
    const[msg,setMsg]=useState('')
    const dispatch= useDispatch()
    const navigate=useNavigate()

    function mensaje(e){
        e.preventDefault()
        const newMsgSend= e.target.msg.value      
        console.log(newMsgSend)
        dispatch(msgcontroller({newMsgSend}))
    }
    return (<Container>    
    <ButtonsActions > 
        <Button className="proof" type="submit" form="message">enviar</Button>
        <Button >adjuntar</Button>
        <Button >descartar</Button>
    </ButtonsActions>
       <Formik onSubmit={mensaje} id='message'>
       <div className="for">
            <button >Para :</button>
            <input  type='text' name='msg' value={msg} onChange={(e)=>setMsg(e.target.value)} >
            </input>
            </div>
            <div>
            <input className="reason" placeholder="reason" type='text'></input>
            <input className="text" placeholder="tema" type='text'></input>
            </div>
           

        </Formik>
            <OutButton onClick={()=>navigate(-1)}>Salir</OutButton>
        </Container>
    )
}
export default NewMessage

const ButtonsActions= styled.div`
    background: #f3f2f1;
    display: inline-flex;
    width: 100%;
    justify-content: center;
    padding: 20px;
   button{
    margin-right: 10px;
    height: 30px;
    background: none;
    font-size: 19px;
    border: none;
    padding: 4px;
   }  
`
const Button = styled.button`
    &:hover{
        background: #edebe9;
        cursor: pointer;
    }
`
const OutButton =styled.button`
    margin-left: 50%;
    margin-top: 30px;
    height: 4vh;
    background: none;
    border: none;
    font-size: 19px;
    &:hover{
        background: #edebe9;
        cursor: pointer;
    }
`


const Formik = styled.form`
    width: 600px;
    background: #fff;
    outline: 2px solid black;
    height: 50vh;
    margin-left: auto;
    margin-right: auto;
    input{
        height: 4vh;
        border-bottom: 1px solid gray;
        width: 98%;
        padding-left: 10px;
    }
    button{
        height: 4vh;
    }
    .for{
        display: inline-flex;
    }
    .for > input {
        width: 540px;
    }
    
    div{
        display: grid;
    }
    .text{
        border-bottom: none;
        height: 280px;  
        outline: none;
        
    }    
`
const Container= styled.div`
    background: #f3f2f1;
    height: 100vh;
`
