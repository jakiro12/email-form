import { useSelector } from "react-redux";
import styled from "styled-components";

function UserProfile(){
    const user = useSelector((state)=>state.primeReducer.email) //busca en el initialState del Slice
    return(<>
       <Section >        
            <DivProfile className="portada">    
            <div>          
                    <img className="image" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="img-avatar"/>
                    </div>  
             </DivProfile>        
        <div className="body">
            <div className="perfil-usuario-bio">
                <h3 className="titulo">Lautaro Elias</h3>
                
            </div>
            <div className="perfil-usuario-footer">
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-signs"></i> Direccion de usuario:{user.hi}</li>
                    <li><i className="icono fas fa-phone-alt"></i> Telefono: 342-4123456</li>
                    <li><i className="icono fas fa-briefcase"></i> Trabaja en: AWS</li>
                    <li><i className="icono fas fa-building"></i> Cargo: Junior Developer</li>
                </ul>
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-marker-alt"></i> Ubicacion: Argentina</li>
                    <li><i className="icono fas fa-calendar-alt"></i> Fecha nacimiento: 29/03/1993</li>
                    <li><i className="icono fas fa-user-check"></i> Registro.</li>
                    <li><i className="icono fas fa-share-alt"></i> <a href="https://www.facebook.com">Redes sociales.</a></li>
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
