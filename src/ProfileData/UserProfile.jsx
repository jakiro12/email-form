import { useSelector } from "react-redux";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

function UserProfile(){
    const navigate=useNavigate()
    const newInformation= useSelector((state)=>state.primeReducer.newProfileValues[0])
    const user = useSelector((state)=>state.primeReducer.email) //busca en el initialState del Slice
  
  
  return(<>
       <Section >        
            <DivProfile className="portada">    
            <div>          
                    <img className="image" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="img-avatar"/>
                    </div>  
             </DivProfile>        
        <div className="body">
            <div className="perfil-bio">
                <h3 className="titulo">{newInformation === undefined ? 'Lautaro Elias' : newInformation.newInfo.nom}</h3>
                <button onClick={()=>navigate('/info')}>Cambiar Datos</button>
            </div>
            <div >
                <ul className="lista-datos">
                    <li> Direccion de usuario:{user.hi}</li>
                    <li>Telefono:{newInformation === undefined ? '3424123456' : newInformation.newInfo.po}  </li>
                    <li> Trabaja en: {newInformation === undefined ? 'AWS' : newInformation.newInfo.work}</li>
                    <li> Cargo: Junior Developer</li>
                </ul>
                <ul className="lista-datos">
                    <li> Ubicacion: {newInformation === undefined ? 'Argentina' : newInformation.newInfo.city}</li>
                    <li> Fecha nacimiento: 29/03/1993</li>
                    <li> Registro.</li>
                    <li> <a href="https://www.facebook.com">Redes sociales.</a></li>
                </ul>
            </div>
          
        </div>
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
    position: absolute;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
  }  
  
`
