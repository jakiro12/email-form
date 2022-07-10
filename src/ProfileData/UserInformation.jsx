import styled from "styled-components";
import { useState } from "react";
import { profile } from "../Reducers/time";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';


const UserInformation = () => {
 const [name,setName]=useState('')
 const [phone,setPhone]=useState('')
 const [job,setJob]=useState('')
 const [location,setLocation]=useState('')
 const dispatch=useDispatch()
 const navigate=useNavigate()
 

  function nameValue(e){
    e.preventDefault()
   const newInfo={
    nom:name,
    po:phone,
    work:job,
    city:location
   }
   
    dispatch(profile({newInfo}))
    navigate('/profile')
  }
 
 return (<Container>
  <div className="info" >Formulario para cambiar los datos personales

  </div>
 
  <FormNewData onSubmit={nameValue}>
    <div>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="nombre" />
    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="telefono"/>
    <input type="text" value={job} onChange={(e)=>setJob(e.target.value)} placeholder="cargo"/>
    <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="ubicacion"/>
   <button type="submit" className="btn">Cambiar</button>
    </div>
    
  </FormNewData>
  
</Container>
 )
}
export default UserInformation

const FormNewData= styled.form`
   
   margin-top: 15px;
   div{
    width: 400px;
   
   }
   input{
    display: grid;
    margin-top: 5px;
    width: 50%;
    background: transparent;
    outline: 2px solid black;
    margin-left: 25%;
    }
   input::placeholder{
    color: #646262;
   }
   .btn{
    cursor: pointer;
    background: none;
    border: 2px solid #940004;
    height: 25px;
    width: 92px;
    outline: 2px solid #940004;
    outline-offset: -2px;
    transition: outline-offset 150ms ease;
   }
   .btn:hover{
    outline-offset: -5px;
   }
`
const Container= styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  margin-top: 10%;
  height: 50vh;
  border: none;
  background: linear-gradient(90deg,#25d855,#fff);
  box-shadow: 1px 1px 0px #999,
                2px 2px 0px #999,
                3px 3px 0px #999,
                4px 4px 0px #999,
                5px 5px 0px #999,
                6px 6px 0px #999;
  width: 500px;
  margin-left: 30%;
  .info{
    margin-top: 10px;
  }
`
