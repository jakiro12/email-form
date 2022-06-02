import styled, {keyframes} from 'styled-components';
import {NavLink} from 'react-router-dom';
import {RiMailLine,RiSendPlane2Line,RiFolderForbidFill,RiDeleteBin6Line,RiStackLine} from 'react-icons/ri'
import '../App.css'

function Dashboard(){
    

    return(
    <>
    <Navigator>
        <h2>User Menu</h2>
        <div>
          <NavLink  to='/profile'> <p>Profile</p></NavLink> 
          <NavLink to='/info' > <p>Personal Data</p></NavLink> 
        </div>
    </Navigator>
    <Welcome>    
        Welcome!  
        
        <div className='contenedor'>
            <div className="carga"></div>
            </div>
        <div className='emailsf'>
            padre
            <div className='child'> 
                Carpetas
                <button type='submit'> <RiMailLine />bandeja de entrada</button>
                <button type='submit'> <RiFolderForbidFill/>correo no deseado</button>
                <button type='submit'><RiSendPlane2Line/> mensajes enviados</button>
                <button type='submit'><RiStackLine/>borradores</button>
                <button type='submit'><RiDeleteBin6Line/> elementos eliminados</button>    
            </div>
            <div className='mensajes'>
                holas
            </div>
        </div>

    </Welcome>
    </>)
}
export default Dashboard

const Navigator = styled.nav`
height: 60px;
background-color: #25d855;
display: flex;
align-items: center;
border: 2px solid black;
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
  background-color: blueviolet;
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
       
       button{
           border-radius: 3px;
           background: #beb4b4;
           font-size: 17px;
          
       }
       .mensajes{
           outline: 2px solid black;
           width: 1250px;
           position: absolute;
           left: 250px;
           height: 342px;
       }
`