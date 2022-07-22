import {useNavigate} from 'react-router-dom';
import '../App.css'
import styled from 'styled-components'

function WrongData(){
   const navigate =useNavigate()
    return(<Diver>
        <p> Invalid Values</p>
        <Button onClick={()=>navigate(-1)}>
        Back
        </Button>
    </Diver>)
}
export default WrongData

const Diver=styled.div`
    height: 100vh;
    background: linear-gradient(90deg, rgba(255,0,219,1) 25%, rgba(9,30,121,1) 100%);
    p{
        position: absolute;
        left: 42%;
        top: 43%;
        font-size: 30px;
        font-family: 'Alegreya', serif;
        text-transform: uppercase;
    }
`

const Button = styled.button`
width: 90px;
margin-left: 47%;
border: 2px solid blue;
border-radius: 2px;
height: 35px;
margin-top: 26%;
cursor: pointer;
text-decoration: none;
font-size: inherit;
line-height: 1;
background: none;
padding: 0.5em 1.5em;
outline: 2px solid blue;
transition: outline-offset 100ms ease;
outline-offset: -2px;
&:hover{
    outline-offset: -6px;
}
`