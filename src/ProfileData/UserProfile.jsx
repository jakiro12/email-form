import { useSelector } from "react-redux";
import styled from "styled-components";
import {useNavigate,NavLink} from 'react-router-dom';
import { useState } from "react";

function UserProfile(){
    const navigate=useNavigate()
    const newInformation= useSelector((state)=>state.primeReducer.newProfileValues[0])
    const user = useSelector((state)=>state.primeReducer.email) //busca en el initialState del Slice
    const[images,setImages]=useState([])
    const uploadPhoto=(fil)=>{       
         const arr=Array.from(fil) //por si quisiera subir mas de una foto aunque podria usar spred operator
         const allImg= arr.map((e)=>{
            return URL.createObjectURL(e)
         })           
         setImages(allImg)        
        }
    const imgDefault='https://www.dklo.co/DkLMRsT/cfDftOpaytr?u=QY9nNLQ5uo28'
  
  return(<>
       <Section >        
            <DivProfile className="portada">    
            <div>          
                    <img className="image" src={!images[0] ? imgDefault:images[0]} alt="img-avatar"/>
                   <label className="pbtn">
                    <span>+</span>
                    <Photo type='file' onChange={(e)=>uploadPhoto(e.target.files)} accept="image/jpeg, image/png"/>
                    </label>
                    </div>  
             </DivProfile>        
        <div className="body" >
            <div>
                <h3>{newInformation === undefined ? 'Lautaro Elias' : newInformation.newInfo.nom}</h3>
                <button onClick={()=>navigate('/info')}>Cambiar Datos</button>
            </div>
            <div >
                <ul>
                    <li> Direccion de usuario:{user.hi}</li>
                    <li>Telefono:{newInformation === undefined ? '3424123456' : newInformation.newInfo.po}  </li>
                    <li> Trabaja en: {newInformation === undefined ? 'AWS' : newInformation.newInfo.work}</li>
                    <li> Cargo: Junior Developer</li>
                </ul>
                <ul>
                    <li> Ubicacion: {newInformation === undefined ? 'Argentina' : newInformation.newInfo.city}</li>
                    <li> Fecha nacimiento: 29/03/1993</li>
                    <li> Registro.</li>
                    <li> <a href="https://www.facebook.com">Redes sociales.</a></li>
                </ul>
            </div>
          
        </div>
        <NavLink to='/page' className='back'>Volver</NavLink>
    </Section>
   
    </>
    )
}
export default UserProfile

const Section = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
    .body{
        background: none;
        width: 700px;
        box-shadow: 0 20px 20px #676767;
        border-radius: 10px 10px 10px 10px;
    }
    h3{
        margin-left: 10px;
    }
    button{
        position: absolute;
        top: 50%;
        left: 65%;
        cursor: pointer;
        border: transparent;
        border-radius: 4px;
        height: 18px;
        color: #fff;
        background: linear-gradient(to right, hsl(240, 70%, 50%),hsl(240,10%,40%));
    }
    .back{
        position: absolute;
        bottom: 0;
        right: 0;        
        font-size: 25px;
    }
`
const DivProfile= styled.div`
 background: linear-gradient(to right, hsl(240, 70%, 50%),hsl(240,10%,40%));
 display: flex;
  width: 900px;
  height: 300px;
  align-items: center;
  justify-content: center;   
  border-radius:0 0 25px 25px ;
  div{
    position: relative;
    top: 70px;
    width: 220px;
    height: 220px;
    border: 4px solid #333;
    border-radius: 100%;
    background: radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%);
  }     
  img{
    border-radius: 100%;
    width: 200px;
    height: 200px;
    object-fit: cover;
    position: absolute;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
  }  
  .pbtn{
    border: 1px solid black;
    border-radius: 2px;
    background: radial-gradient(#928989,#ffffffc8);
    position: absolute;
    text-align: center;
    cursor: pointer;
    width: 15px;
    height: 15px;
    bottom: 25px;
    right: 25px;
  }
`
const Photo=styled.input`
    display: none;
    cursor: pointer;
`